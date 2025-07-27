// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWPD2J8YkQaE3xCJWZWKXinzpuUqi3G4",
  authDomain: "code-tracker-56a43.firebaseapp.com",
  databaseURL: "https://code-tracker-56a43-default-rtdb.firebaseio.com",
  projectId: "code-tracker-56a43",
  storageBucket: "code-tracker-56a43.firebasestorage.app",
  messagingSenderId: "378279949183",
  appId: "1:378279949183:web:bbee82ad80b063d8a7e04a",
  measurementId: "G-N57GLMY5MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;