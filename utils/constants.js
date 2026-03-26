// Centralized test data and URLs for easy maintenace
module.exports = {
    // ===== NASA =====
    NASA: {
        BASE_URL: 'https://images.nasa.gov',
        API_URL: 'https://images-api.nasa.gov',
        SEARCH_TERM: 'moon',
        INVALID_SEARCH_TERM: 'asdkjasdhkajshdkjashdkjashd',
        MIN_RESULTS: 5
    },

    // ===== OpenLibrary =====
    OPENLIBRARY: {
        BASE_URL: 'https://openlibrary.org',
        SEARCH_TERM: 'the hobbit',
        MIN_RESULTS: 5,
        INVALID_SEARCH_TERM: 'asdkjasdhkajshdkjashdkjashd',
        VALIDATION_COUNT: 5
    }
};