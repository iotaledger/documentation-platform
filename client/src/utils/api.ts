import { ISearchResult } from "../models/ISearchResult";

async function sendRequest<T>(
    apiEndpoint: string, endpoint: string, method: string, data?: unknown): Promise<T | undefined> {
    const response = await fetch(`${apiEndpoint}/${endpoint}`, {
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
