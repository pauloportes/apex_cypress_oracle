const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
    e2e: {
      defaultCommandTimeout: 15000,
       env: {
         username_test: process.env.USERNAME_TEST,
         password: process.env.PASSWORD,
         base_url: process.env.BASE_URL,
       },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
