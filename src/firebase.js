// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBL6wlPIM5XhelDZKk0esLsfbXR0vqaiU",
  authDomain: "intern-project-fc888.firebaseapp.com",
  projectId: "intern-project-fc888",
  storageBucket: "intern-project-fc888.appspot.com",
  messagingSenderId: "1056723123324",
  appId: "1:1056723123324:web:79f402af8d9c0b2e879df9",
  measurementId: "G-2490FTMNSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider, doc, setDoc}




