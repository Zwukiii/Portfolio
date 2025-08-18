// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // ✅ correct import
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMiawiuNIgMCvMF7UL38UfxWoZfi7qG74",
  authDomain: "react-app-27064.firebaseapp.com",
  projectId: "react-app-27064",
  storageBucket: "react-app-27064.firebasestorage.app",
  messagingSenderId: "166481639237",
  appId: "1:166481639237:web:fbd3f3f6d1b3addb9f302c",
  measurementId: "G-XCD803NQEF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
