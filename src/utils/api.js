async function sendRequest(apiEndpoint, endpoint, method, data) {
    const response = await fetch(`${apiEndpoint}/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
    });
    return response.ok ? response.json() : null;
}

export async function submitFeedback(apiEndpoint, document, data) {
    try {
        return sendRequest(apiEndpoint, 'feedback', 'POST', { document, wasItUseful: data.wasItUseful, comments: data.comments });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to submit feedback.'
        };
    }
}

export async function submitMissing(apiEndpoint, document, fromDocument) {
    try {
        return sendRequest(apiEndpoint, 'missing', 'POST', { document, fromDocument });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to submit missing.'
        };
    }
}

export async function submitEmail(apiEndpoint, email) {
    try {
        return sendRequest(apiEndpoint, 'email', 'POST', { email });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to submit email.'
        };
    }
}

export async function search(apiEndpoint, query) {
    try {
        return sendRequest(apiEndpoint, `search/?query=${query}`, 'GET');
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to search.'
        };
    }
}
