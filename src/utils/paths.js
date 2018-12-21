export const sanitizeHashId = (id) => {
    // make lower case
    // de-escape spaces
    // replace spaces with underscore
    return id ? id
        .toLowerCase()
        .replace(/\\ /g, ' ')
        .replace(/ /g, '_') : undefined;
};

