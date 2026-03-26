class OpenLibraryAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = 'https://openlibrary.org';
    }

    async search(query) {
        return await this.request.get(
            `${this.baseURL}/search.json?q=${query}`
        );
    }

    async getFirstBook(query) {
        const response = await this.search(query);

        if (response.status() !== 200) {
            throw new Error(`API failed: ${response.status()}`);
        }

        const data = await response.json();

        if (!data || !Array.isArray(data.docs)) {
            throw new Error('Invalid response structure');
        }

        if (data.docs.length === 0) {
            throw new Error('No books found');
        }

        return data.docs[0];
    }
}

module.exports = { OpenLibraryAPI };