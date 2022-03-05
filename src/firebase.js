import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABzQB3_tU2pmByvQCOY9F1Ws5j9_ZHmHU",
    authDomain: "slackbuild-16d21.firebaseapp.com",
    projectId: "slackbuild-16d21",
    storageBucket: "slackbuild-16d21.appspot.com",
    messagingSenderId: "403935010807",
    appId: "1:403935010807:web:a3a8a2309d20961021d8f2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };