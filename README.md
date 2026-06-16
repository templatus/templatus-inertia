[![Build Status](https://github.com/templatus/templatus-inertia/workflows/CI/badge.svg)](https://github.com/templatus/templatus-inertia/actions)

# Templatus (Inertia edition)

Templatus is an opinionated template to build web applications with Ruby on Rails and Inertia (using Svelte.js). It simplifies the process of setting up a new application while following best practices.

Live demo available at https://templatus-inertia.ledermann.dev

There are two sister repositories:

Using Hotwire instead of Inertia (the "DHH way"):
https://github.com/templatus/templatus-hotwire/

Using API instead of Inertia and Svelte.js instead of Vue.js;
https://github.com/templatus/templatus/

## Features / Technology stack

### Backend

- [Ruby](https://www.ruby-lang.org/de/) 4.0
- [Ruby on Rails](https://rubyonrails.org/) 8.1
- [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) for WebSocket communication
- [PostgreSQL](https://www.postgresql.org/) for using as SQL database
- [Sidekiq](https://sidekiq.org/) for background processing
- [Redis](https://redis.io/) for Caching, ActionCable, and Sidekiq

### Frontend

- [Inertia](https://inertiajs.com/) as a protocol for frontend/backend communication
- [Tailwind CSS 4](https://tailwindcss.com/) to not have to write CSS at all
- [Tabler Icons](https://tabler-icons.io/) for free SVG icons
- [Vite](https://vitejs.dev/) for bundling JavaScript and CSS with Hot Module Replacement (HMR) in development
- [Bun](https://bun.sh/) as package manager for JavaScript dependencies

### Development

- [Puma-dev](https://github.com/puma/puma-dev) for using `.test` TLD (instead of `localhost:3000`) and `https` in development
- [Overmind](https://github.com/DarthSim/overmind) for starting up the application locally (Procfile handling like Foreman)
- [dotenv](https://github.com/bkeepers/dotenv) to load environment variables from .env into ENV
- [TypeScript](https://www.typescriptlang.org/) for writing strongly-typed JavaScript
- [Prettier](https://prettier.io/) for auto-formatting TypeScript and Ruby code in Visual Studio Code
- [annotate](https://github.com/ctran/annotate_models) for annotating models and routes

### Linting and testing

- [RuboCop](https://rubocop.org/) for Ruby static code analysis
- [RSpec](https://rspec.info/) for Ruby testing
- [ESLint](https://eslint.org/) for TypeScript static code analysis
- [Capybara](https://github.com/teamcapybara/capybara) with [Playwright](https://playwright.dev/) for System tests

### Deployment

- [Docker](https://www.docker.com/) for production deployment, NOT for development
- [DockerRailsBase](https://github.com/ledermann/docker-rails-base) for fast building an optimized Docker image based on Alpine Linux
- [GitHub Actions](https://docs.github.com/en/actions) for testing, linting, and building Docker image
- [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates) configuration for updating dependencies (with auto-merge)
- Ready for serving assets via CDN like CloudFront
- [Honeybadger](https://www.honeybadger.io/) for error tracking in Ruby and TypeScript
- [RorVsWild](https://www.rorvswild.com/) for performance monitoring
- [Plausible](https://plausible.io/) for privacy friendly analytics

### Production

- [Lograge](https://github.com/roidrage/lograge) for single-line logging
- Gzip compression of dynamic responses (HTML, JSON) using [Rack::Deflater](https://github.com/rack/rack/blob/master/lib/rack/deflater.rb)
- Fine-tuned Content Security Policy (CSP)

## Metrics

This template is developed with optimized performance and security in mind. The following benchmarks are performed against the demo installation on production. It uses an inexpensive virtual server on the [Hetzner Cloud](https://www.hetzner.com/de/cloud) behind a [Traefik](https://traefik.io/traefik/) setup.

### Lighthouse site performance

100% in all categories.

![Lighthouse](docs/lighthouse.png)

### Security headers

[![Security headers](docs/security-headers.png)](https://securityheaders.com/?q=templatus-inertia.ledermann.dev&followRedirects=on)

What's the red _Permissions-Policy_ badge? This seems to be fixed with one of the next Rails update:
https://github.com/rails/rails/pull/41994

### Mozilla Observatory

[![Mozilla Observatory](docs/mozilla-observatory.png)](https://observatory.mozilla.org/analyze/templatus-inertia.ledermann.dev)

### WebPageTest

[![WebPageTest](docs/web-page-test.png)](https://www.webpagetest.org/result/220616_BiDcE2_4B7/)

### GTmetrix

[![GTmetrix](docs/GTmetrix.png)](https://gtmetrix.com/reports/templatus-inertia.ledermann.dev/UNRVxoRT/)

### Check-your-website

[![Check-your-website](docs/check-your-website.png)](https://check-your-website.server-daten.de/?q=templatus-inertia.ledermann.dev)

### JavaScript size

176 KB of compiled JavaScript (after tree-shaking, minified & uncompressed).

```
$ RAILS_ENV=production SECRET_KEY_BASE_DUMMY=1 bin/rails assets:precompile
bun install v1.3.14 (0d9b296a)

Checked 306 installs across 351 packages (no changes) [73.00ms]
Building with Vite ⚡️
vite v8.0.16 building client environment for production...
transforming...✓ 6848 modules transformed.
rendering chunks...
computing gzip size...
public/vite/.vite/manifest-assets.json             0.09 kB │ gzip:  0.09 kB
public/vite/assets/logo-CFLTF6Dx.svg               0.49 kB │ gzip:  0.30 kB
public/vite/.vite/manifest.json                    0.96 kB │ gzip:  0.28 kB
public/vite/assets/application-CiDSB2aZ.css       29.83 kB │ gzip:  6.04 kB
public/vite/assets/rolldown-runtime-QTnfLwEv.js    0.69 kB │ gzip:  0.42 kB
public/vite/assets/application-fjvTAGXx.js        19.55 kB │ gzip:  8.06 kB │ map:    56.04 kB
public/vite/assets/vendor-BBEbfbGy.js            210.92 kB │ gzip: 67.62 kB │ map: 1,182.34 kB

✓ built in 2.61s
Build with Vite complete: /Users/ledermann/Projects/templatus-inertia/public/vite
```

### Network transfer

Small footprint: The demo application transfers only **71 KB** of data on the first visit.

![Network](docs/network.png)

### Docker build time

With multi-stage building and using [DockerRailsBase](https://github.com/ledermann/docker-rails-base) the build of the Docker image takes very little time. Currently, the `deploy` job requires about 1,5 minutes on GitHub Actions (see https://github.com/templatus/templatus-inertia/actions)

### Docker image size

The Docker image is based on Alpine Linux and is optimized for minimal size (currently **115 MB** uncompressed disk size). It includes just the bare minimum - no build tools like Node.js, no JS sources (just the compiled assets), no tests.

```
$ container-diff analyze ghcr.io/templatus/templatus-inertia -n

-----Size-----

Analysis for ghcr.io/templatus/templatus-inertia:
IMAGE                                 DIGEST     SIZE
ghcr.io/templatus/templatus-inertia   sha256:... 115M
```

## Getting started

### Install for development

1. Clone the repo locally:

```bash
git clone git@github.com:templatus/templatus-inertia.git
cd templatus-inertia
```

2. Install PostgreSQL, Redis, and puma-dev (if not already present). On a Mac with Homebrew, run this to install from the `Brewfile`:

```bash
brew bundle
```

3. Set up [puma-dev](https://github.com/puma/puma-dev) to use HTTPS for development. Do this on macOS:

```bash
sudo puma-dev -setup
puma-dev -install
puma-dev link

# Use Vite via puma-dev proxy
# Adopted from https://github.com/puma/puma-dev#webpack-dev-server
echo 3036 > ~/.puma-dev/vite.templatus-inertia
```

4. Setup the application to install gems and JavaScript packages and create the database:

```bash
bin/setup
```

5. Start the application locally:

```bash
bin/dev
```

Then open https://templatus-inertia.test in your browser.

### Running linters

RuboCop:

```
bin/rubocop
```

ESLint:

```
bun run lint
```

TypeScript compiler:

```
bun run tsc
```

### Running tests locally

Ruby tests:

```
bin/rspec
open coverage/index.html
```

JavaScript unit tests:

```
bun run test
```

System tests with Capybara and Playwright:

```
bin/rspec spec/system
```

### Test deployment locally

```
docker network create public
docker-compose up
```
