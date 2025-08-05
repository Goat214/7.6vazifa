// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore import qilish

const firebaseConfig = {
  apiKey: "AIzaSyAF2Sn5GYCHOzjUGisgzdHj92DkcNFe1Wc",
  authDomain: "goat-7d197.firebaseapp.com",
  projectId: "goat-7d197",
  storageBucket: "goat-7d197.appspot.com", // <-- to'g'ri domen ('.app' emas, '.appspot.com')
  messagingSenderId: "478092405177",
  appId: "1:478092405177:web:114efe700acf6e9b186e68"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);         
const db = getFirestore(app);      

export { auth, db };               