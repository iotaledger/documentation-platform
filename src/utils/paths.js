export function sanitizeHashId(id) {
    // make lower case
    // de-escape spaces
    // replace spaces with underscore
    return id ? id
        .toLowerCase()
        .replace(/\\ /g, ' ')
        .replace(/ /g, '_') : undefined;
}

export function convertRootUrl(url) {
    if (url && url.startsWith('root://')) {
        return url
            .replace('root://', '/docs/')
            .replace(/\.md$/i, '');
    }

    return url;
}