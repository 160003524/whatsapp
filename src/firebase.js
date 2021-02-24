import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPVFy91050TD2pUUkcZ0FwSGLZ2pzZh1I",
  authDomain: "whatsapp-75dff.firebaseapp.com",
  projectId: "whatsapp-75dff",
  storageBucket: "whatsapp-75dff.appspot.com",
  messagingSenderId: "1077840142572",
  appId: "1:1077840142572:web:7152f4d5f7e9f9443485c9",
  measurementId: "G-1LR4P93YQD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
