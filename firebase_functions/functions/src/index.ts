import * as cors from 'cors';
import * as functions from 'firebase-functions';
import { storeComment, storeEmail, storeFeedback } from './firebase';
import { IComment } from './models/IComment';
import { IEmail } from './models/IEMail';
import { IFeedback } from './models/IFeedback';

const corsInstance = cors({ origin: true });

exports.submitComment = functions.https.onRequest((req, res) => {
  corsInstance(req, res, async () => {
    const packet: IComment = req.body;
    if (
      packet === undefined ||
      packet.document === undefined ||
      packet.fullText === undefined ||
      packet.selected === undefined ||
      packet.link === undefined ||
      packet.textAround === undefined ||
      packet.comments === undefined
    ) {
      console.log('submitComment failed. Packet: ', packet);
      return res.status(400).json({ error: 'Ensure all fields are included' });
    }

    try {
      return res.json({ result: await storeComment(packet) });
    } catch (error) {
      console.log('submitComment failed. Error: ', error);
      return res.status(403).json({ error: error.toString() });
    }
  });
});

exports.submitFeedback = functions.https.onRequest((req, res) => {
  corsInstance(req, res, async () => {
    const packet: IFeedback = req.body;
    if (
      packet === undefined ||
      packet.document === undefined ||
      packet.wasItUseful === undefined ||
      packet.comments === undefined
    ) {
      console.log('submitFeedback failed. Packet: ', packet);
      return res.status(400).json({ error: 'Ensure all fields are included' });
    }

    try {
      return res.json({ result: await storeFeedback(packet) });
    } catch (error) {
      console.log('submitFeedback failed. Error: ', error);
      return res.status(403).json({ error: error.toString() });
    }
  });
});

exports.submitEmail = functions.https.onRequest((req, res) => {
  corsInstance(req, res, async () => {
    const packet: IEmail = req.body;
    if (
      packet === undefined ||
      packet.email === undefined
    ) {
      console.log('submitEmail failed. Packet: ', packet);
      return res.status(400).json({ message: 'Ensure all fields are included' });
    }

    try {
      return res.json({ message: await storeEmail(packet) });
    } catch (error) {
      console.log('submitEmail failed. Error: ', error);
      return res.status(403).json({ error: error.toString() });
    }
  });
});
