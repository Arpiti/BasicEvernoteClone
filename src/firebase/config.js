import firebase from 'firebase/app';
import 'firebase/firestore';

//Firebase cong details
const firebaseConfig = {
  apiKey: "AIzaSyBLDxYq4HOsO_fkc0Y1e2nlt4ZQ_XqhopE",
  authDomain: "arpit-evernote-app.firebaseapp.com",
  projectId: "arpit-evernote-app",
  storageBucket: "arpit-evernote-app.appspot.com",
  messagingSenderId: "299279522396",
  appId: "1:299279522396:web:e2e5b79c252d7bc5092499"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const timestamp =  firebase.firestore.FieldValue.serverTimestamp();
const projectFirestore = firebase.firestore()

export {projectFirestore, timestamp};