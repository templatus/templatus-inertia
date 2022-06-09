# How to have Rails request specs handling errors like production
# https://medium.com/@edgar/rspec-how-to-have-rails-request-specs-handling-errors-like-production-a8c21ed0308a

module ErrorResponses
  def rails_respond_without_detailed_exceptions # rubocop:disable Metrics/MethodLength
    env_config = Rails.application.env_config
    original_show_exceptions = env_config['action_dispatch.show_exceptions']
    original_show_detailed_exceptions =
      env_config['action_dispatch.show_detailed_exceptions']
    env_config['action_dispatch.show_exceptions'] = true
    env_config['action_dispatch.show_detailed_exceptions'] = false
    yield
  ensure
    env_config['action_dispatch.show_exceptions'] = original_show_exceptions
    env_config[
      'action_dispatch.show_detailed_exceptions'
    ] = original_show_detailed_exceptions
  end
end

RSpec.configure { |config| config.include ErrorResponses }
