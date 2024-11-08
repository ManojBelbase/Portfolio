// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi0m5GVFElZZWNOk8nau3hm-dATelxmKY",
  authDomain: "manojbelbaseportfoilo.firebaseapp.com",
  projectId: "manojbelbaseportfoilo",
  storageBucket: "manojbelbaseportfoilo.firebasestorage.app",
  messagingSenderId: "156139785762",
  appId: "1:156139785762:web:d7cb27fa6cbe340a4d047b",
  measurementId: "G-R0YL8BHTJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
