const { test, expect } = require('../../fixtures/testFixtures');
const { normalizeTitle } = require('../../utils/helper');
const { NASA } = require('../../utils/constants')

test('NASA Integration - API and UI consistency', async ({
    page,
    nasaAPI,
    detailsPage
}) => {

    let nasaData;

    await test.step('Fetch data from API', async () => {
        nasaData = await nasaAPI.getFirstItem(NASA.SEARCH_TERM);
    });

    await test.step('Navigate to details page', async () => {
        await page.goto(`${NASA.BASE_URL}/details/${nasaData.nasa_id}`);
    });

    await test.step('Validate UI matches API', async () => {

        await detailsPage.waitForTitle();

        const uiTitle = await detailsPage.getTitle();

        //Compare normalized Titles
        expect(normalizeTitle(uiTitle))
            .toContain(normalizeTitle(nasaData.title));

        const idPresent = await detailsPage.validateNasaId(nasaData.nasa_id);
        expect(idPresent).toBeTruthy();

        expect(page.url()).toContain(nasaData.nasa_id);

        const imageLoaded = await detailsPage.validateImageLoaded();
        expect(imageLoaded).toBeTruthy();
    });

});

