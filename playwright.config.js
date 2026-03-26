// PLAYWRIGHT CONFIG
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // testDir: './',
  // timeout: 30 * 1000,
  // expect: {
  //   timeout: 5000,
  // },
  fullyParallel: true,

  use: {
    headless: true, // FORCE HEADLESS
    viewport: { width: 1280, height: 720 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
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