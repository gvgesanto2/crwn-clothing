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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return false;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(err) {
      console.log("Error creating user", err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;