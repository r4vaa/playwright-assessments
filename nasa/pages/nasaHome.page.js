// Handles search functionality on homepage
const { expect } = require('@playwright/test')
class NasaHomePage {
    constructor(page) {
        this.page = page

        this.searchInput = page.getByRole('textbox', { name: /search for/i })
        this.searchButton = page.getByRole('button', { name: 'Submit' })
    }

    /**
     * Search for the Term
     */
    async search(term) {
        await this.searchButton.click()
        await expect(this.searchButton).toBeEnabled();
        await this.searchInput.fill(term);

        await this.searchInput.press('Enter');
    }
}

module.exports = { NasaHomePage }