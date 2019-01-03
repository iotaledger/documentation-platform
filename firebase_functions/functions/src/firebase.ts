import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { IComment } from './models/IComment';
import { IEmail } from './models/IEMail';
import { IFeedback } from './models/IFeedback';
import { IMissing } from './models/IMissing';

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

function getProject(document: string): string {
    const regex = new RegExp(/\/docs\/\s*(.*?)\s*\//g);
    const matches = regex.exec(document);
    return matches && matches.length >= 2 ? matches[1] : "no-project";
}

function getCollection(document: string, project: string): string {
    const remain = document.replace(`/docs/${project}/`, '');
    return remain && remain.length > 0 ? remain.replace(/\//g, ' => ') : "default";
}

export async function storeComment(data: IComment): Promise<boolean> {
    const project = getProject(data.document);
    await admin
        .firestore()
        .collection('comments')
        .doc(project)
        .collection(getCollection(data.document, project))
        .doc()
        .set(data);

    return true;
}

export async function storeFeedback(data: IFeedback): Promise<boolean> {
    const project = getProject(data.document);
    await admin
        .firestore()
        .collection('feedback')
        .doc(project)
        .collection(getCollection(data.document, project))
        .doc()
        .set(data);

    return true;
}

export async function storeEmail(data: IEmail): Promise<string> {
    const col = await admin
        .firestore()
        .collection('emails');

    const allDocs = await col.listDocuments();

    let foundDoc = false;
    for (let i = 0; i < allDocs.length; i++) {
        const docSnapshot = await allDocs[i].get();
        const existingEmail = docSnapshot.get("email");
        if (existingEmail === data.email) {
            foundDoc = true;
            break;
        }
    }

    if (!foundDoc) {
        await col
            .doc(data.email)
            .set(data);
    }        

    return 'Thank you for signing up!';
}

export async function storeMissing(data: IMissing): Promise<boolean> {
    const project = getProject(data.document);
    const col = await admin
        .firestore()
        .collection('missing')
        .doc(project)
        .collection(getCollection(data.document, project));

    const allDocs = await col.listDocuments();

    let foundDoc = false;
    for (let i = 0; i < allDocs.length; i++) {
        const docSnapshot = await allDocs[i].get();
        const existingFromDocument = docSnapshot.get("fromDocument");
        if (existingFromDocument === data.fromDocument) {
            foundDoc = true;
            break;
        }
    }

    if (!foundDoc) {
        await col
            .doc()
            .set(data);
    }

    return true;
}
