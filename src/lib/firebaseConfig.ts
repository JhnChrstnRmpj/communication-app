import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCpXNOL5O0UDYrHPe6uov6diqQalZIwL4",
  authDomain: "communication-app-7fefb.firebaseapp.com",
  projectId: "communication-app-7fefb",
  storageBucket: "communication-app-7fefb.firebasestorage.app",
  messagingSenderId: "1026229288668",
  appId: "1:1026229288668:web:e06a8d45a8216d36937e19",
  measurementId: "G-C6B45DSPGY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

