
const { expect } = require('@playwright/test');

// HANDLES book details page


class OpenLibraryDetailsPage {
    constructor(page) {
        this.page = page;

        // semantic + stable
        this.title = page.locator('[itemprop="name"]').first();
    }

    async waitForTitle() {
        await this.title.waitFor({ state: 'attached', timeout: 10000 });

        await expect.poll(async () => {
            const text = await this.title.textContent();
            return text && text.trim().length > 0;
        }).toBeTruthy();
    }

    async getTitle() {
        return (await this.title.textContent()) || '';
    }
}

module.exports = { OpenLibraryDetailsPage };