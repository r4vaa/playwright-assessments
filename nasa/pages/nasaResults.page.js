// Handles results listing Page

const { expect } = require('@playwright/test')
class NasaResultsPage {
    constructor(page) {
        this.page = page;

        // Target image inside result card
        // this.title = page.locator('h1');
        // this.media = page.locator('img[src*="images-assets"], video');
        this.results = page.locator('a[href*="/details/"] img');
    }

    async waitForResults() {
        await this.page.waitForURL(/search/, { timeout: 15000 })
        await this.results.first().waitFor({
            state: 'visible',
            timeout: 15000
        })
    }

    async getResultsCount() {
        return await this.results.count();
    }

    async openFirstResults() {
        const first = this.results.first();

        await expect(first).toBeVisible({ timeout: 15000 });

        await first.scrollIntoViewIfNeeded();

        await first.click();
    }


    // async validateTitle() {
    //     await this.title.waitFor({
    //         state: 'visible'
    //     })
    // }

    async validateMinimumResults(min = 5) {
        const count = await this.getResultsCount();
        return count >= min
    }
}

module.exports = { NasaResultsPage }