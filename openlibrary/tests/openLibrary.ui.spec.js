const { test, expect } = require('../../fixtures/testFixtures');
const { OPENLIBRARY } = require('../../utils/constants')

test('OpenLibrary UI - Search results validation', async ({
    page,
    openLibraryHomePage,
    openLibraryResultsPage
}) => {

    await page.goto(OPENLIBRARY.BASE_URL);

    await test.step('Search for The Hobbit', async () => {
        await openLibraryHomePage.search(OPENLIBRARY.SEARCH_TERM);
    });

    await test.step('Validate results loaded', async () => {
        await openLibraryResultsPage.waitForResults();
        const count = await openLibraryResultsPage.getResultsCount();
        expect(count).toBeGreaterThanOrEqual(OPENLIBRARY.MIN_RESULTS);
    });

    await test.step('Validate first 5 results', async () => {
        const titles = await openLibraryResultsPage.getTitles(OPENLIBRARY.VALIDATION_COUNT);

        titles.forEach(title => {
            expect(title.trim().length).toBeGreaterThan(0);
        });

        const authors = await openLibraryResultsPage.getAuthors(OPENLIBRARY.VALIDATION_COUNT);

        authors.forEach(author => {
            if (author) {
                expect(author.trim().length).toBeGreaterThan(0);
            }
        });
    });
});