const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
    e2e: {
      chromeWebSecurity: false,
      defaultCommandTimeout: 15000,
       env: {
         username_test: process.env.USERNAME_TEST,
         password: process.env.PASSWORD,
         login_url: process.env.LOGIN_URL,
         home_url: process.env.HOME_URL,
       },
    setupNodeEvents(on, config) {
    },
  },
});
