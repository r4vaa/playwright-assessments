const { NASA } = require('../../utils/constants')

class NasaAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = NASA.API_URL;
    }

    // Search API
    async search(query) {
        return await this.request.get(
            `${this.baseURL}/search?q=${query}&media_type=image`
        );
    }

    // Extract first result
    async getFirstItem(query) {
        const response = await this.search(query);

        if (response.status() !== 200) {
            throw new Error('Search API failed')
        }
        const data = await response.json();
        const items = data.collection.items;

        if (!items.length) {
            throw new Error('No items found');
        }
        return items[0].data[0]; // {nasa_id, title}
    }

    // Asset API

    async getAsset(nasaId) {
        return await this.request.get(
            `${this.baseURL}/asset/${nasaId}`
        )
    }

    // Extract downloadable asset Links
    async getAssetLinks(nasaId) {
        const response = await this.getAsset(nasaId);

        if (response.status() !== 200) {
            throw new Error('Asset API Failed')
        }

        const data = await response.json();
        const items = data.collection.items;

        if (!items.length) {
            throw new Error('No assets found')
        }

        return items.map(item => item.href)
    }
}

module.exports = { NasaAPI };