class OpenLibraryHomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox');
    }

    async search(term) {
        await this.searchInput.fill(term);
        await this.searchInput.press('Enter');
    }
}

module.exports = { OpenLibraryHomePage };