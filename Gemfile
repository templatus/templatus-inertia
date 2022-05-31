source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

# Full-stack web application framework. (https://rubyonrails.org)
gem 'rails', '~> 7.0.3'

# Use Vite in Rails and bring joy to your JavaScript experience (https://github.com/ElMassimo/vite_ruby)
gem 'vite_rails'

# Pg is the Ruby interface to the PostgreSQL RDBMS (https://github.com/ged/ruby-pg)
gem 'pg', '~> 1.1'

# Puma is a simple, fast, threaded, and highly parallel HTTP 1.1 server for Ruby/Rack applications (https://puma.io)
gem 'puma', '~> 5.0'

# Boot large ruby/rails apps faster (https://github.com/Shopify/bootsnap)
gem 'bootsnap', require: false

# Timezone Data for TZInfo (https://tzinfo.github.io)
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# A Ruby client library for Redis (https://github.com/redis/redis-rb)
gem 'redis'

# Error reports you can be happy about. (https://github.com/honeybadger-io/honeybadger-ruby)
gem 'honeybadger'

# Tame Rails' multi-line logging into a single line per request (https://github.com/roidrage/lograge)
gem 'lograge'

# Middleware for enabling Cross-Origin Resource Sharing in Rack apps (https://github.com/cyu/rack-cors)
gem 'rack-cors', require: 'rack/cors'

# Rack middleware for defining a canonical host name. (https://github.com/tylerhunt/rack-canonical-host)
gem 'rack-canonical-host'

# Brotli compression for Rack responses (http://github.com/marcotc/rack-brotli/)
gem 'rack-brotli'

# Simple, efficient background processing for Ruby (https://sidekiq.org)
gem 'sidekiq'

group :development, :test do
  # Debugging functionality for Ruby (https://github.com/ruby/debug)
  gem 'debug', platforms: %i[mri mingw x64_mingw]

  # Autoload dotenv in Rails. (https://github.com/bkeepers/dotenv)
  gem 'dotenv-rails'

  # RSpec for Rails (https://github.com/rspec/rspec-rails)
  gem 'rspec-rails'

  # Automatic Ruby code style checking tool. (https://github.com/rubocop/rubocop)
  gem 'rubocop', require: false

  # Automatic performance checking tool for Ruby code. (https://github.com/rubocop/rubocop-performance)
  gem 'rubocop-performance', require: false

  # Automatic Rails code style checking tool. (https://github.com/rubocop/rubocop-rails)
  gem 'rubocop-rails', require: false

  # Code style checking for RSpec files (https://github.com/rubocop/rubocop-rspec)
  gem 'rubocop-rspec', require: false
end

group :development do
  # A debugging tool for your Ruby on Rails applications. (https://github.com/rails/web-console)
  gem 'web-console'

  # Profiles loading speed for rack applications. (https://miniprofiler.com)
  # gem 'rack-mini-profiler'

  # Guard gem for RSpec (https://github.com/guard/guard-rspec)
  gem 'guard-rspec', require: false

  ############# Used by prettier-ruby
  # A drop-in replacement for the prettyprint gem with more functionality. (https://github.com/ruby-syntax-tree/prettier_print)
  gem 'prettier_print'

  # A parser based on ripper (https://github.com/kddnewton/syntax_tree)
  gem 'syntax_tree'

  # Syntax Tree support for Haml (https://github.com/ruby-syntax-tree/syntax_tree-haml)
  gem 'syntax_tree-haml'

  # Syntax Tree support for RBS (https://github.com/ruby-syntax-tree/syntax_tree-rbs)
  gem 'syntax_tree-rbs'
  ##################################
end

group :test do
  # Code coverage for Ruby (https://github.com/simplecov-ruby/simplecov)
  gem 'simplecov', require: false
end
