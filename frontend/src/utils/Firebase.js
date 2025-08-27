import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "onecart-2507b.firebaseapp.com",
  projectId: "onecart-2507b",
  storageBucket: "onecart-2507b.firebasestorage.app",
  messagingSenderId: "528767629531",
  appId: "1:528767629531:web:d270dfb35c3ea8971cb4fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export {auth, provider} 