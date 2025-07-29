
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF2Sn5GYCHOzjUGisgzdHj92DkcNFe1Wc",
  authDomain: "goat-7d197.firebaseapp.com",
  projectId: "goat-7d197",
  storageBucket: "goat-7d197.firebasestorage.app",
  messagingSenderId: "478092405177",
  appId: "1:478092405177:web:114efe700acf6e9b186e68"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()