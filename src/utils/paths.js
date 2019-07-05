export function sanitizeHashId(id, skipLowerCase) {
    // make lower case
    // de-escape spaces
    // replace spaces with hyphens
    if (!id) {
        return id;
    }
    if (!skipLowerCase) {
        id = id.toLowerCase();
    }
    return id
        .replace(/\\ /g, ' ')
        .replace(/\?/g, '')
        .replace(/'/g, '')
        .replace(/\./g, '')
        .replace(/ /g, '-');
}

