InertiaRails.configure do |config|
  config.version = Rails.configuration.x.git.commit_version
end
