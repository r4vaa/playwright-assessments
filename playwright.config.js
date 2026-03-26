// PLAYWRIGHT CONFIG
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,

  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true
  },

  projects: [
    {
      name: 'NASA',
      testDir: './nasa/tests'
    },
    {
      name: 'OpenLibrary',
      testDir: './openlibrary/tests'
    }
  ],

  reporter: [['html', { open: 'never' }]],
});