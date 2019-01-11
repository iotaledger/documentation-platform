import axios from 'axios';
import { apiEndpoint } from '../config.json';

async function sendRequest(endpoint, method, data = {}) {
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

export async function submitFeedback(document, data) {
    try {
        return await sendRequest('feedback', 'POST', { document, wasItUseful: data.wasItUseful, comments: data.comments });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to submit feedback.'
        };
    }
}

export async function submitMissing(document, fromDocument) {
    try {
        return await sendRequest('missing', 'POST', { document, fromDocument });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to submit missing.'
        };
    }
}

export async function submitEmail(email) {
    try {
        return await sendRequest('email', 'POST', { email });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return {
            success: false,
            message: 'Failed to submit email.'
        };
    }
}
