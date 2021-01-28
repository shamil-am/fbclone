import firebase from "firebase";
//
const firebaseConfig = {
  apiKey: "AIzaSyCPGfMvluGwJWNWOEUPYR38fGf3CEp67cI",
  authDomain: "facebook-clone-215f5.firebaseapp.com",
  projectId: "facebook-clone-215f5",
  storageBucket: "facebook-clone-215f5.appspot.com",
  messagingSenderId: "222673532254",
  appId: "1:222673532254:web:4351e20b8c597f8f280bcf",
  measurementId: "G-3C0V03M5Q3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
