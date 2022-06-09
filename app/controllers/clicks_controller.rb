class ClicksController < ApplicationController
  def index
    clicks = Click.order(created_at: :desc).limit(5).to_a
    return unless stale?(clicks, template: false, public: true)

    expires_in 0, must_revalidate: true

    respond_to do |format|
      format.json { render json: { total: Click.count, items: clicks } }
    end
  end

  def create
    click =
      Click.create! user_agent: request.user_agent,
                    ip: anonymize(request.remote_ip)
    ActionCable.server.broadcast 'clicks_channel', click
  end

  private

  def anonymize(ip)
    addr = IPAddr.new(ip.to_s)
    if addr.ipv4?
      # set last octet to 0
      addr.mask(24)
    else
      # set last 80 bits to zeros
      addr.mask(48)
    end
  end
end
