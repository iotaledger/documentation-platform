import api from './api';

export async function submitMissing(document, fromDocument) {
    try {
        await api('submitMissing', { document, fromDocument });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}