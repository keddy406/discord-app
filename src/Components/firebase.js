// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALHyTtin9yP69qNHy8FThZ2_rQ9SLAWao",
  authDomain: "discord-app-ae518.firebaseapp.com",
  databaseURL: "https://discord-app-ae518.firebaseio.com",
  projectId: "discord-app-ae518",
  storageBucket: "discord-app-ae518.appspot.com",
  messagingSenderId: "1027024923269",
  appId: "1:1027024923269:web:64f2653d91e05631fa17ec",
  measurementId: "G-SSKH82F5M2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
