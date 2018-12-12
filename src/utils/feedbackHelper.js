import api from './api';
import { getProjectName } from './helpers';

export async function submitFeedback(document, data) {
  try {
    const project = document !== '/404' && document !== '/home' && getProjectName(document);
    await api('submitFeedback', { wasItUseful: data.wasItUseful, comments: data.comments, project, document });
  } catch (err) {
    console.error(err);
  }
}