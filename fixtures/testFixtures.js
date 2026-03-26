// Centralized fixture setup for pages and API

const base = require('@playwright/test');
const { NasaHomePage } = require('../nasa/pages/nasaHome.page');
const { NasaResultsPage } = require('../nasa/pages/nasaResults.page');
const { NasaDetailsPage } = require('../nasa/pages/nasaDetails.page');
const { NasaAPI } = require('../nasa/api/nasa.api');
const { OpenLibraryHomePage } = require('../openlibrary/pages/openLibraryHome.page');
const { OpenLibraryResultsPage } = require('../openlibrary/pages/openLibraryResults.page');
const { OpenLibraryDetailsPage } = require('../openlibrary/pages/openLibraryDetails.page');
const { OpenLibraryAPI } = require('../openlibrary/api/openLibrary.api');


exports.test = base.test.extend({
    // NASA SETUP
    homePage: async ({ page }, use) => {
        await use(new NasaHomePage(page));
    },

    resultsPage: async ({ page }, use) => {
        await use(new NasaResultsPage(page));
    },
    detailsPage: async ({ page }, use) => {
        await use(new NasaDetailsPage(page));
    },
    nasaAPI: async ({ request }, use) => {
        await use(new NasaAPI(request))
    },

    // OPEN LIBRARY  SETUP
    openLibraryHomePage: async ({ page }, use) => {
        await use(new OpenLibraryHomePage(page))
    },

    openLibraryResultsPage: async ({ page }, use) => {
        await use(new OpenLibraryResultsPage(page))
    },

    openLibraryDetailsPage: async ({ page }, use) => {
        await use(new OpenLibraryDetailsPage(page))
    },

    openLibraryAPI: async ({ request }, use) => {
        await use(new OpenLibraryAPI(request))
    }
})

exports.expect = base.expect;


