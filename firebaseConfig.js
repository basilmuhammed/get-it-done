// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJqgBgCPmqEsOrc0x284_NiRG_wv33Uns",
  authDomain: "get-it-done-e4742.firebaseapp.com",
  databaseURL: "https://get-it-done-e4742-default-rtdb.firebaseio.com",
  projectId: "get-it-done-e4742",
  storageBucket: "get-it-done-e4742.appspot.com",
  messagingSenderId: "55303390259",
  appId: "1:55303390259:web:42787660ba6754201b4f46",
  measurementId: "G-DSPK55MPTZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
