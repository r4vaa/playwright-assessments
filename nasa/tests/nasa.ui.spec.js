const { test, expect } = require('../../fixtures/testFixtures');
const { NASA } = require('../../utils/constants')

test('NASA UI - Search and Validate results', async ({ page,
    homePage,
    resultsPage,
    detailsPage
}) => {



    await test.step('Navigate to NASA site', async () => {
        await page.goto(NASA.BASE_URL);
    })

    await test.step('Search for media', async () => {
        await homePage.search(NASA.SEARCH_TERM);
    })

    await test.step('Validate search results', async () => {
        await resultsPage.waitForResults();

        const isValid = await resultsPage.validateMinimumResults(5);
        expect(isValid).toBeTruthy()
    })

    await test.step('Open first result', async () => {
        await resultsPage.openFirstResults();
    })

    await test.step('Validate details page', async () => {
        await detailsPage.waitForTitle();

        const imageLoaded = await detailsPage.validateImageLoaded();
        expect(imageLoaded).toBeTruthy();
    })


})