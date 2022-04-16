import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2YWY8NWSaHuJi9HpmzMKrsoaoKxoDxbc",
  authDomain: "crwn-clothing-fa44a.firebaseapp.com",
  projectId: "crwn-clothing-fa44a",
  storageBucket: "crwn-clothing-fa44a.appspot.com",
  messagingSenderId: "848989117524",
  appId: "1:848989117524:web:87531e941a5990b3d061c1",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists()); // this will show me if the instance exist inside the database  (true or false)

  // check if user data exists
  if (!userSnapshot.exists()) {
    // if user data doenst exist (it will return false), create/set the document with the data from userAuthin my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  // if the user data exist, return userDocRf
  return userDocRef;
};
