InertiaRails.configure do |config|
  config.version = Rails.configuration.x.git.commit_version
  config.always_include_errors_hash = true
end
