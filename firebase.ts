import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFRTmL2g_dBSQ3jF-injtfUjJt0HJ3fk0",
  authDomain: "chatgpt-messenger-653ad.firebaseapp.com",
  projectId: "chatgpt-messenger-653ad",
  storageBucket: "chatgpt-messenger-653ad.appspot.com",
  messagingSenderId: "556002726985",
  appId: "1:556002726985:web:fdd1947265df456c2bdb98",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
