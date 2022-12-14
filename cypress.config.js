const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://center.sagerspace.net',
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
