import axios from 'axios';

async function sendRequest(apiEndpoint, endpoint, method, data = {}) {
    const response = await axios({
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        url: `${apiEndpoint}/${endpoint}`,
        data
    });
    return response ? response.data : null;
}

export async function submitFeedback(apiEndpoint, document, data) {
    try {
        return await sendRequest(apiEndpoint, 'feedback', 'POST', { document, wasItUseful: data.wasItUseful, comments: data.comments });
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
        return await sendRequest(apiEndpoint, 'missing', 'POST', { document, fromDocument });
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
        return await sendRequest(apiEndpoint, 'email', 'POST', { email });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to submit email.'
        };
    }
}

export async function feed(apiEndpoint, context, page, pageSize) {
    try {
        return await sendRequest(apiEndpoint, `feed/${context}?page=${page}&pageSize=${pageSize}`, 'GET');
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to retreive feed.'
        };
    }
}
