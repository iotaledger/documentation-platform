export function sanitizeHashId(id) {
    // make lower case
    // de-escape spaces
    // replace spaces with hyphens
    return id ? id
        .toLowerCase()
        .replace(/\\ /g, ' ')
        .replace(/ /g, '-') : undefined;
}

