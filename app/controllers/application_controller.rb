class ApplicationController < ActionController::Base
  include InertiaErrors

  inertia_share flash: -> {
                  { notice: flash.notice, alert: flash.alert }.compact
                }
end
