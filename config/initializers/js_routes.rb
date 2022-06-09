JsRoutes.setup do |config|
  # Setup your JS module system:
  # ESM, CJS, AMD, UMD or nil
  config.module_type = 'ESM'

  config.exclude = [
    # Default Rails routes not required from Inertia.js
    /rails_blob/,
    /rails_disk/,
    /rails_info/,
    /rails_mailers/,
    /rails_service/,
    /rails_conductor/,
    /rails_direct_uploads/,
    /rails_.+_inbound/,
    # Sidekiq admin UI
    /sidekiq/,
    # Other
    /webmanifest/,
  ]

  config.compact = true
end
