import { projectFirestore, timestamp } from '../firebase/config';

export const createFirestore = (collection, note) => {

    console.log('This is createFireStore');

       const newNote = projectFirestore
            .collection(collection)
            .add({
                title: note.title,
                body: note.body,
                timestamp: timestamp
            });
               
        return newNote;
}
