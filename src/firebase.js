// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCClgHcs7V8FXU6hiHbhxiU2Bu0znvNmrs",
  authDomain: "linkedin-clone-59dca.firebaseapp.com",
  projectId: "linkedin-clone-59dca",
  storageBucket: "linkedin-clone-59dca.appspot.com",
  messagingSenderId: "328209361568",
  appId: "1:328209361568:web:7505d10d781ae1b1dbf7c5",
  measurementId: "G-GF7BWBWS6S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
