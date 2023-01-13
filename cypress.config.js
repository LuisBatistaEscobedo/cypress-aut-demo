const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      dev: {
        baseUrl: "http://automationpractice.com/",
        viewportHeight: 1080,
        viewportWidth: 1920,
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
      },
    }
    
  },
});
