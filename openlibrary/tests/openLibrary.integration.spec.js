const { test, expect } = require('../../fixtures/testFixtures');
const { OPENLIBRARY } = require('../../utils/constants')

test('OpenLibrary Integration - API vs UI results', async ({
    page,
    openLibraryAPI,
    openLibraryHomePage,
    openLibraryResultsPage
}) => {

    let book;

    await test.step('Fetch API data', async () => {
        book = await openLibraryAPI.getFirstBook(OPENLIBRARY.SEARCH_TERM);
        console.log('API Title:', book.title);
    });

    await page.goto(OPENLIBRARY.BASE_URL);

    await test.step('Search in UI', async () => {
        await openLibraryHomePage.search(OPENLIBRARY.SEARCH_TERM);
    });

    await test.step('Validate API title exists in UI', async () => {
        await openLibraryResultsPage.waitForResults();

        const titles = await openLibraryResultsPage.getTitles(10);

        const match = titles.some(title =>
            title.toLowerCase().includes(book.title.toLowerCase())
        );

        expect(match).toBeTruthy();
    });
});