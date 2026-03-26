const { test, expect } = require('@playwright/test');
const { OPENLIBRARY } = require('../../utils/constants')

test('OpenLibrary API - limit parameter validation', async ({ request }) => {

    const response = await request.get(
        `https://openlibrary.org/search.json?q=${OPENLIBRARY.SEARCH_TERM}&limit=5`
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.docs.length).toBeLessThanOrEqual(5);
});