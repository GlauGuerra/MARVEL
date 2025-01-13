
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js', 
    video: false, 
    baseUrl: 'https://gateway.marvel.com',
    
  },
});






