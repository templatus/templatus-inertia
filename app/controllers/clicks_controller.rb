class ClicksController < ApplicationController
  def index
    clicks = Click.order(created_at: :desc).limit(5).to_a

    render inertia: 'Clicks/Index', props: { total: Click.count, items: clicks }
  end

  def create
    create_click!

    flash.now[:notice] = t('.success')
    render inertia: 'Clicks/Index', status: :created
  rescue StandardError
    flash.now[:alert] = t('.fail')
    render inertia: 'Clicks/Index', status: :unprocessable_entity
  end

  private

  def create_click!
    click =
      Click.create! user_agent: request.user_agent,
                    ip: anonymize(request.remote_ip)
    ActionCable.server.broadcast 'clicks_channel', click
  end

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
