import firebase from "firebase";

const firebaseConfig = {
  apiKey: "XXXXXXXX",
  authDomain: "XXXXXXX",
  projectId: "XXXXXXXX",
  storageBucket: "XXXXXXXXXXXX",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXXXXXXXXXX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = fireBaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };

