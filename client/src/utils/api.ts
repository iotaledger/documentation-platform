import { ISearchResult } from "../models/ISearchResult";

/**
 * Send a request to the api.
 * @param apiEndpoint The api endpoint.
 * @param route The route in the api.
 * @param method The method.
 * @param data The data to send.
 * @returns The response.
 */
async function sendRequest<T>(
    apiEndpoint: string, route: string, method: string, data?: unknown): Promise<T | undefined> {
    const response = await fetch(`${apiEndpoint}/${route}`, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: data ? JSON.stringify(data) : undefined
    });

    if (response.ok) {
        const obj = await response.json();
        return obj as T;
    }
}

/**
 * Submit feedback to the api.
 * @param apiEndpoint The api endpoint.
 * @param document The document to reference.
 * @param data The data to send.
 * @param data.wasItUseful Was the information useful.
 * @param data.comments The comment in the data.
 * @returns The response.
 */
export async function submitFeedback(
    apiEndpoint: string,
    document: string,
    data: { comments: string; wasItUseful?: string }): Promise<{ success: boolean; message: string }> {
    try {
        return await sendRequest<{ success: boolean; message: string }>(
            apiEndpoint, "feedback", "POST", { document, wasItUseful: data.wasItUseful, comments: data.comments });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: "Failed to submit feedback."
        };
    }
}

/**
 * Submit missing page data.
 * @param apiEndpoint The api endpoint.
 * @param document The document to reference.
 * @param fromDocument The document the page was referenced from.
 * @returns The response.
 */
export async function submitMissing(
    apiEndpoint: string,
    document: string,
    fromDocument: string): Promise<{ success: boolean; message: string }> {
    try {
        return await sendRequest<{ success: boolean; message: string }>(
            apiEndpoint, "missing", "POST", { document, fromDocument });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: "Failed to submit missing."
        };
    }
}

/**
 * Submit an email for subscription.
 * @param apiEndpoint The api endpoint.
 * @param email The email address to subscribe.
 * @returns The response.
 */
export async function submitEmail(
    apiEndpoint: string,
    email: string): Promise<{ success: boolean; message: string }> {
    try {
        return await sendRequest<{ success: boolean; message: string }>(
            apiEndpoint, "email", "POST", { email });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: "Failed to submit email."
        };
    }
}

/**
 * Perform a search.
 * @param apiEndpoint The api endpoint.
 * @param query The quest to search for.
 * @returns The response.
 */
export async function search(
    apiEndpoint: string,
    query: string): Promise<{ success: boolean; message: string; items?: ISearchResult[] }> {
    try {
        return await sendRequest<{ success: boolean; message: string; items?: ISearchResult[] }>(
            apiEndpoint, `search/?query=${query}`, "GET");
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: "Failed to search."
        };
    }
}
