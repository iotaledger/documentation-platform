export const santizeHashId = (id) => {
    // make lower case
    // de-escape spaces
    // replace spaces with underscore
    return id
        .toLowerCase()
        .replace(/\\ /g, " ")
        .replace(/ /g, "_");
}

