import { projectFirestore } from '../firebase/config';

export const deleteFirestore = (collection, note) => {

    console.log('This is delete FireStore');
        projectFirestore
            .collection(collection)
            .doc(note.id)
            .delete();
}
