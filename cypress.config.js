const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },

    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome, @shelex/cypress-allure-plugin",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports",
        overwrite: false,
        html: false,
        json: true
      },
      "@shelex/cypress-allure-plugin": {
        outputDir: "allure-results"
      }
    },

    baseUrl: 'http://localhost:3000',
  },
});
