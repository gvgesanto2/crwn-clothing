import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBafR451FXzuaB3joGe-cstLxeUmcuH85o",
  authDomain: "crwn-db-6c2e0.firebaseapp.com",
  databaseURL: "https://crwn-db-6c2e0.firebaseio.com",
  projectId: "crwn-db-6c2e0",
  storageBucket: "crwn-db-6c2e0.appspot.com",
  messagingSenderId: "638722880932",
  appId: "1:638722880932:web:ebd5e6d96eb006ad877d31",
  measurementId: "G-XNGVQD7X49"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;