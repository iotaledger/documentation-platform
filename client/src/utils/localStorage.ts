/**
 * Store something in the local storage.
 * @param name The name of the item to store.
 * @param data The name of the item to store.
 * @returns Nothing.
 */
export function localStorageSet(name: string, data: unknown): boolean {
    try {
        if (window.localStorage) {
            window.localStorage.setItem(name, JSON.stringify(data));
            return true;
        }
        return false;
    } catch {
        return false;
    }
}

/**
 * Retrieve something from the local storage.
 * @param name The name of the item to store.
 * @returns The data or undefined if it does not exist.
 */
export function localStorageGet<T>(name: string): T {
    try {
        if (window.localStorage) {
            const data = window.localStorage.getItem(name);
            if (data) {
                return JSON.parse(data) as T;
            }
        }
    } catch {
    }
}
