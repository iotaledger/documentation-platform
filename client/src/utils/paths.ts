export function sanitizeHashId(id: string, skipLowerCase: boolean = false, isForAnchor: boolean = false): string {
    // make lower case
    // de-escape spaces
    // replace spaces with hyphens
    if (!id) {
        return id;
    }
    if (!skipLowerCase) {
        id = id.toLowerCase();
    }
    if (isForAnchor) {
        id = id.replace(/\./g, "");
    }
    return id
        .replace(/\\ /g, " ")
        .replace(/\?/g, "")
        .replace(/'/g, "")
        .replace(/ /g, "-");
}

