import * as functions from 'firebase-functions';
const cors = require('cors')({ origin: true });
const { submitComment, submitFeedback } = require('./firebase');

exports.submitComment = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const packet = req.body;
    if (
      !packet ||
      !packet.document ||
      !packet.fullText ||
      !packet.selected ||
      !packet.project ||
      !packet.textAround
    ) {
      console.log('submitComment failed. Packet: ', packet);
      return res.status(400).json({ error: 'Ensure all fields are included' });
    }

    try {
      return res.json({ result: await submitComment(packet) });
    } catch (error) {
      console.log('submitComment failed. Error: ', error);
      return res.status(403).json({ error });
    }
  });
});

exports.submitFeedback = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const packet = req.body;
    if (!packet || !packet.document || !packet.project) {
      console.log('submitFeedback failed. Packet: ', packet);
      return res.status(400).json({ error: 'Ensure all fields are included' });
    }

    try {
      return res.json({ result: await submitFeedback(packet) });
    } catch (error) {
      console.log('submitFeedback failed. Error: ', error);
      return res.status(403).json({ error });
    }
  });
});
