const { expect } = require('@playwright/test');

class OpenLibraryResultsPage {
    constructor(page) {
        this.page = page;
        this.results = page.locator('.searchResultItem');
        this.titles = page.locator('.searchResultItem h3');
        this.authors = page.locator('.searchResultItem .bookauthor');
    }

    async waitForResults() {
        await expect.poll(async () => {
            return await this.results.count();
        }, { timeout: 10000 }).toBeGreaterThan(0);
    }

    async getResultsCount() {
        return await this.results.count();
    }

    async getTitles(count = 5) {
        const titles = await this.titles.allTextContents();
        return titles.slice(0, count);
    }

    async getAuthors(count = 5) {
        const authors = await this.authors.allTextContents();
        return authors.slice(0, count);
    }
}

module.exports = { OpenLibraryResultsPage };