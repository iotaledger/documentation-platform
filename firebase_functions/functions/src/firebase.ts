import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

const getFormattedDocument = (document, project) => document
  .replace(`/docs/${project}/`, '')
  .replace(/\//g, ' => ')

exports.submitComment = async ({
  project, document, selected, fullText, textAround, link = null, comments = null
}) => {
  await admin
    .firestore()
    .collection('comments')
    .doc(project)
    .collection(getFormattedDocument(document, project))
    .doc()
    .set({ selected, fullText, textAround, link, document, comments });

  return true;
};

exports.submitFeedback = async ({
  project, document, rating = null, comments = null
}) => {
  await admin
    .firestore()
    .collection('feedback')
    .doc(project)
    .collection(getFormattedDocument(document, project))
    .doc()
    .set({ document, comments, rating });

  return true;
};

exports.submitEmail = async ({ email }) => {
  await admin
    .firestore()
    .collection('emails')
    .doc(email)
    .set({ email });

  return 'Successfully sent!';
};
