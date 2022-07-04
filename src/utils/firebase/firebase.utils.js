import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// Here I'm going to walk through creating a method that allows us to upload these categories from that SHOP_DATA up into the respective collections up in Firestore:

// Im adding collections from FireStore and the documents inside the collections:
export const addColectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  // Passing in db because we're saying, Hey, go with our db instance, this is exactly we're doing with fireStore. And them what specific collectionKey are you looking for? collectionKey
  const collectionRef = collection(db, collectionKey);
  // How to store each of these objects (objectsToAdd) inside of this new collectionRef as a new document?
  const batch = writeBatch(db);
  // Batch allows me to attach a bunch of different, writes, deletes, sets, whatever we can attach all of those to the batch and only when we're ready to fire off the batch does the actual transaction begin. So we need to create a bunch of set events.
  objectsToAdd.forEach((object) => {
    // this object is the category inside the SHOP_DATA
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // I'm going to pass it the collectionRef and not db, because the collectionRef actually tells directly this doc method which database we're using, because we got this collection (collectionRef) from calling collection where the db was already passed.
    batch.set(docRef, object);
    // Here I want to batch.set on this docRef, because firebase will give us back a document reference, even if it doesn't exist yet, it will just point to that place for this specific key inside of our collection. And now we say Hey, set that location and set it with the value of the object itself. I can pass it some JSON object and it will build out that structure for me.
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  // Give us the categories as an array:
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // If I dont receive this arguments, dont run the function
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists()); // this will show me if the instance exist inside the database  (true or false)

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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  // if the user data exist, return userDocRef
  // with thunk: return userDocRef;
  // with saga, we want the snapshot, because the data lives on the snapshot. The docRef is just a pointer to that space where that data could live. We want the snapshot now so that we can get the data and store it inside of our reducer.
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // If I dont receive this arguments, dont run the function
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
// the second paramether is a callback function I want to call every time the auth state changes

export const getCurrentUser = () => {
  // convert from a observable listener into a promise based function call:
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        // We want to unsubscribe the moment we get a value.
        unsubscribe();
        // We want to resolve the moment we get the value.
        resolve(userAuth);
      },
      reject
    );
  });
};

// Products:

export const addColectionAndDocumentsProducts = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  // Passing in db because we're saying, Hey, go with our db instance, this is exactly we're doing with fireStore. And them what specific collectionKey are you looking for? collectionKey
  const collectionRef = collection(db, collectionKey);
  // How to store each of these objects (objectsToAdd) inside of this new collectionRef as a new document?
  const batch = writeBatch(db);
  // Batch allows me to attach a bunch of different, writes, deletes, sets, whatever we can attach all of those to the batch and only when we're ready to fire off the batch does the actual transaction begin. So we need to create a bunch of set events.
  objectsToAdd.forEach((object) => {
    // this object is the product inside the PRODUCTS_DATA
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // I'm going to pass it the collectionRef and not db, because the collectionRef actually tells directly this doc method which database we're using, because we got this collection (collectionRef) from calling collection where the db was already passed.
    batch.set(docRef, object);
    // Here I want to batch.set on this docRef, because firebase will give us back a document reference, even if it doesn't exist yet, it will just point to that place for this specific key inside of our collection. And now we say Hey, set that location and set it with the value of the object itself. I can pass it some JSON object and it will build out that structure for me.
  });
  await batch.commit();
  console.log("done");
};

export const getProductsAndDocuments = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  // Give us the categories as an array:
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
