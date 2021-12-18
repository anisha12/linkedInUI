import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCT94nHQ7ocP-t5GoWDuZvq8ObhM5_bWTs",
    authDomain: "linkedin-yt-4cc73.firebaseapp.com",
    projectId: "linkedin-yt-4cc73",
    storageBucket: "linkedin-yt-4cc73.appspot.com",
    messagingSenderId: "1064373712195",
    appId: "1:1064373712195:web:cdb277ab7d7b7eeedeebf6"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {db, auth};