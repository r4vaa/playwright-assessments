/*
* Helper to normalize titles between API and UI
*Removes branding suffix and normalizes spacing
*/
function normalizeTitle(title) {
    return title
        .replace(/\|.*$/, '') // remove "| NASA Image and video library"
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

module.exports = { normalizeTitle };