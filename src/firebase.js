import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_A-fjB3wrUn526sniNN_0aLFvKXoC4oo",
  authDomain: "slack-clone-yt-ff2f8.firebaseapp.com",
  projectId: "slack-clone-yt-ff2f8",
  storageBucket: "slack-clone-yt-ff2f8.appspot.com",
  messagingSenderId: "867207659533",
  appId: "1:867207659533:web:1854477a43a389686a1544"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = fireBaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };

