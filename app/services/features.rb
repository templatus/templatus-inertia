class Features
  def data
    file = File.read("#{__dir__}/features/data.json")
    json = JSON.parse(file)

    json.each do |group|
      # Replace `version` placeholders (containing the method name) with the actual version
      group['items'].each do |item|
        item['version'] = __send__(item['version']) if item.key?('version')
      end
    end
  end

  private

  def alpine_version
    return if RUBY_PLATFORM.exclude?('linux')

    # :nocov:
    `cat /etc/alpine-release 2>/dev/null`.chomp.presence
    # :nocov:
  end

  def ruby_version
    RUBY_VERSION
  end

  def rails_version
    Rails.version
  end

  def puma_version
    Puma::Const::PUMA_VERSION
  end

  def postgresql_version
    ActiveRecord::Base.connection.select_value('SHOW server_version;')
  end

  def redis_version
    Redis.new.info['redis_version']
  end

  def sidekiq_version
    Sidekiq::VERSION
  end
end
