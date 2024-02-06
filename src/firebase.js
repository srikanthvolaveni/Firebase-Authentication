// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3aG56wONxaiceqyfRNEaAXG_1sEMPorY",
  authDomain: "react-firebase-auth-email-pswd.firebaseapp.com",
  projectId: "react-firebase-auth-email-pswd",
  storageBucket: "react-firebase-auth-email-pswd.appspot.com",
  messagingSenderId: "119720824633",
  appId: "1:119720824633:web:78b4ae1251c10a569162e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;