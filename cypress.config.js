const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "../node_modules/cypress-mochawesome-reporter",
  "reporterOptions":{
    "reportDir":"cypress/reports/mochawesome-report",
    "overwrite": false,
    "html": false,
    "json": true
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/smoke/*.js'
  },

});
