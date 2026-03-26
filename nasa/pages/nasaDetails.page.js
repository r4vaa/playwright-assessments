// Handles details page validations

const { expect } = require('@playwright/test');


class NasaDetailsPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('h1').first();
        this.body = page.locator('body')
    }

    /*
     * Waiting For title to appear
     */
    async waitForTitle() {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.title).toHaveText(/.+/, { timeout: 10000 });
    }

    /**
     * Fetching the Title
     * @returns title
     */
    async getTitle() {
        const text = await this.title.textContent();
        return text || '';
    }

    /**
     *  Validate NASA ID exists on page
     */
    async validateNasaId(nasaId) {
        const bodyText = await this.body.textContent();
        return bodyText.includes(nasaId);
    }

    /**
     *Validate image is actually loaded
     */
    async validateImageLoaded() {
        const image = this.page.locator('img[src*="images-assets"]').first();

        await image.waitFor({ state: 'visible' });

        await expect.poll(async () => {
            return await image.evaluate(img => img.naturalWidth);
        }).toBeGreaterThan(0);

        return true;
    }
}

module.exports = { NasaDetailsPage };