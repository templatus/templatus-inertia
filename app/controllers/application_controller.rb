class ApplicationController < ActionController::Base
  include InertiaErrors

  inertia_share flash: -> do
                  { notice: flash.notice, alert: flash.alert }.compact
                end
end
