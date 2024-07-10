FROM ghcr.io/ledermann/rails-base-builder:3.3.4-alpine AS builder

# Remove some files not needed in resulting image.
# Because they are required for building the image, they can't be added to .dockerignore
RUN rm -r package.json tsconfig.json tailwind.config.cjs postcss.config.cjs vite.config.mts svelte.config.cjs

FROM ghcr.io/ledermann/rails-base-final:3.3.4-alpine
LABEL maintainer="georg@ledermann.dev"

# Workaround to trigger builder's ONBUILDs to finish:
COPY --from=builder /etc/alpine-release /tmp/dummy

USER app

# Enable YJIT
ENV RUBY_YJIT_ENABLE=1

# Entrypoint prepares the database.
ENTRYPOINT ["docker/startup.sh"]

# Start the server by default, this can be overwritten at runtime
CMD ["./bin/rails", "server"]
