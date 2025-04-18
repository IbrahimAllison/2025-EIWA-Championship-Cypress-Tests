const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5v45d2',
  e2e: {
    baseUrl: "http://localhost:49843", // adjust to match your server
  },
});
