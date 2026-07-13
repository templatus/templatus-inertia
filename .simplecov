# frozen_string_literal: true

# Configuration only. `SimpleCov.start` lives in spec/rails_helper.rb --
# SimpleCov 1.0 deprecates starting coverage from this file.
SimpleCov.configure do
  load_profile 'rails'

  skip 'app/jobs/application_job.rb'
  skip 'app/mailers/application_mailer.rb'
  skip 'app/channels/application_cable/connection.rb'
  skip 'app/channels/application_cable/channel.rb'
  skip 'app/models/application_record.rb'
end
