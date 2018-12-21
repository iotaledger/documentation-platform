import api from './api';

export async function submitFeedback(document, data) {
    try {
        await api('submitFeedback', { document, wasItUseful: data.wasItUseful, comments: data.comments });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}