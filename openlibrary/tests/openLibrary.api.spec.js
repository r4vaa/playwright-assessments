const { test, expect } = require('../../fixtures/testFixtures');
const { OPENLIBRARY } = require('../../utils/constants')

test('OpenLibrary API - Search validation', async ({ openLibraryAPI }) => {

    const response = await openLibraryAPI.search(OPENLIBRARY.SEARCH_TERM);

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(typeof data.numFound).toBe('number');
    expect(data.numFound).toBeGreaterThan(0);

    expect(Array.isArray(data.docs)).toBeTruthy();
    expect(data.docs.length).toBeGreaterThan(0);

    data.docs.slice(0, 5).forEach(doc => {
        expect(doc.title).toBeTruthy();

        if (doc.author_name) {
            expect(doc.author_name.length).toBeGreaterThan(0);
        }
    });
});


test('OpenLibrary API - Negative search', async ({ openLibraryAPI }) => {

    const response = await openLibraryAPI.search(OPENLIBRARY.INVALID_SEARCH_TERM);

    const data = await response.json();

    expect(response.status()).toBe(200);
    expect(data.numFound).toBe(0);
    expect(data.docs.length).toBe(0);
});