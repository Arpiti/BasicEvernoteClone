import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useReadFirestore = (collection) => {

    console.log('This is useReadFireStore');
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        console.log('This is useEffect in useReadFireStore');
        const unsub = projectFirestore
            .collection(collection)
            .onSnapshot(snap => {
                const documents =  snap.docs.map(doc => {
                    // const data = doc.data;
                    // data['id'] = doc.id;
                    // return data;
                    return { ...doc.data(), id: doc.id }
                });
                console.log('Documents >> ', documents);
                setDocs(documents);
            })
        return () => {
            unsub();
        };
    }, [collection]);

    return docs;

}
