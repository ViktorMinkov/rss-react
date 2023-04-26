import { defineConfig } from 'cypress';
import cypressCoverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressCoverage(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3001',
  },
  pageLoadTimeout: 80000,
  screenshotOnRunFailure: false,
  video: false,
});
