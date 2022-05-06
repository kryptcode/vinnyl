// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBnq6MxbAE7g7e2Yw0Q7UIxFhKTPeciys",
  authDomain: "vinnyl-de6af.firebaseapp.com",
  projectId: "vinnyl-de6af",
  storageBucket: "vinnyl-de6af.appspot.com",
  messagingSenderId: "100072962793",
  appId: "1:100072962793:web:1322155d14faf47f438e78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }