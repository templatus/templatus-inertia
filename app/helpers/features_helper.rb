module FeaturesHelper # rubocop:disable Metrics/ModuleLength
  def features # rubocop:disable Metrics/MethodLength
    [
      {
        name: 'The backend',
        slogan: 'Server side',
        items: [
          {
            name: 'Ruby',
            version: ruby_version,
            href: 'https://www.ruby-lang.org/',
            description:
              'A dynamic, open source programming language with a focus on simplicity and productivity.
               It has an elegant syntax that is natural to read and easy to write.',
          },
          {
            name: 'Ruby on Rails',
            version: rails_version,
            href: 'https://rubyonrails.org/',
            description:
              'Rails is a web application development framework written in the Ruby programming language.
               It is designed to make programming web applications easier by making assumptions about what
               every developer needs to get started.',
          },
          {
            name: 'PostgreSQL',
            version: postgres_version,
            href: 'https://www.postgresql.org/',
            description:
              'PostgreSQL is a powerful, open source object-relational database system with over 30 years of
               active development that has earned it a strong reputation for reliability, feature robustness,
               and performance.',
          },
          {
            name: 'Puma',
            version: puma_version,
            href: 'https://puma.io/',
            description:
              'Puma is a simple, fast, multi-threaded, and highly concurrent HTTP 1.1 server for Ruby/Rack
               applications.',
          },
          {
            name: 'Redis',
            version: redis_version,
            href: 'https://redis.io/',
            description:
              'Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.',
          },
          {
            name: 'Sidekiq',
            version: sidekiq_version,
            href: 'https://sidekiq.org/',
            description:
              'Simple, efficient background processing for Ruby
                <p class="mt-2 text-xs">
                  → <a class="font-medium uppercase hover:underline" href="/sidekiq">Admin frontend</a>
                </p>',
          },
        ],
      },
      {
        name: 'The frontend',
        slogan: 'Client side',
        items: [
          {
            name: 'Inertia.js',
            href: 'https://inertiajs.com/',
            description:
              'Build single-page apps, without building an API. Inertia.js lets you quickly build modern
               single-page React, Vue and Svelte apps using classic server-side routing and controllers.',
          },
          {
            name: 'Svelte',
            href: 'https://svelte.dev/',
            description: 'Cybernetically enhanced web apps',
          },
          {
            name: 'Tailwind CSS 3',
            href: 'https://tailwindcss.com/',
            description:
              'A utility-first CSS framework packed with classes that can be composed to build any design,
               directly in your markup.',
          },
          {
            name: 'Tabler Icons',
            href: 'https://tablericons.com/',
            description:
              '1424 Open source free SVG icons. Highly customizable. No attribution required. For commercial use.',
          },
          {
            name: 'Vite',
            href: 'https://vitejs.dev/',
            description: "Next generation frontend tooling. It's fast!",
          },
        ],
      },
      {
        name: 'Continuous integration',
        slogan: 'Quality insurance',
        items: [
          {
            name: 'GitHub Actions',
            href: 'https://github.com/features/actions',
            description: 'Test, build and deliver on every push to GitHub',
          },
          {
            name: 'RSpec',
            href: 'https://rspec.info/',
            description:
              'Behaviour Driven Development for Ruby. Making TDD Productive and Fun.',
          },
          {
            name: 'RuboCop',
            href: 'https://rubocop.org/',
            description: 'The Ruby Linter/Formatter that Serves and Protects',
          },
          {
            name: 'ESLint',
            href: 'https://eslint.org/',
            description:
              'ESLint statically analyzes your code to quickly find problems',
          },
          {
            name: 'Cypress',
            href: 'https://cypress.io/',
            description:
              'Fast, easy and reliable testing for anything that runs in a browser.',
          },
        ],
      },
      {
        name: 'Deployment',
        slogan: 'Ship it!',
        items: [
          {
            name: 'Alpine Linux',
            version: alpine_version,
            href: 'https://alpinelinux.org/',
            description:
              'Alpine Linux is an independent, non-commercial, general purpose Linux distribution designed for
               power users who appreciate security, simplicity and resource efficiency.',
          },
          {
            name: 'Docker',
            href: 'https://www.docker.com/',
            description: 'Dockerized using an optimized base image.',
          },
        ],
      },
    ]
  end

  private

  def alpine_version
    return unless RUBY_PLATFORM.include?('linux')

    `cat /etc/alpine-release 2>/dev/null`.chomp
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

  def postgres_version
    ActiveRecord::Base.connection.select_value('SHOW server_version;')
  end

  def redis_version
    Redis.new.info['redis_version']
  end

  def sidekiq_version
    Sidekiq::VERSION
  end
end
