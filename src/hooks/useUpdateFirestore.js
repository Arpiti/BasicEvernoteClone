import { projectFirestore, timestamp } from '../firebase/config';

export const updateFirestore = (collection, id, noteObj) => {

    console.log('This is updateFireStore');


    if (id && noteObj) {
        projectFirestore
            .collection(collection)
            .doc(id)
            .update({
                title: noteObj.title,
                body: noteObj.text,
                timestamp: timestamp
            });
    }
}
