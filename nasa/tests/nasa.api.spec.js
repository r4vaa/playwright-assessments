const { test, expect } = require('../../fixtures/testFixtures')
const { NASA } = require('../../utils/constants')


test('NASA API- Search and Asset Validation', async ({ nasaAPI }) => {

    const item = await nasaAPI.getFirstItem(NASA.SEARCH_TERM);

    expect(item).toHaveProperty('nasa_id');
    expect(item).toHaveProperty('title');

    const links = await nasaAPI.getAssetLinks(item.nasa_id);

    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toContain('images-assets');

})


test('NASA API - Invalid search returns', async ({ nasaAPI }) => {

    const response = await nasaAPI.search(NASA.INVALID_SEARCH_TERM);

    expect(response.status()).toBe(200);
    const data = await response.json();
    const items = data.collection.items;
    expect(items.length).toBe(0);
})