import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '6g6s4z',
  screenshotsFolder: 'tmp/cypress_screenshots',
  trashAssetsBeforeRuns: false,
  videosFolder: 'tmp/cypress_videos',
  fixturesFolder: 'spec/cypress/fixtures',
  downloadsFolder: 'spec/cypress/downloads',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./spec/cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'https://templatus-inertia.test',
    specPattern: 'spec/cypress/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'spec/cypress/support/index.js',
  },
});
