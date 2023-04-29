// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAkA0-nhePn065p8QM7thGn_OTZvzx1Tso",
  authDomain: "vinyl-916f9.firebaseapp.com",
  projectId: "vinyl-916f9",
  storageBucket: "vinyl-916f9.appspot.com",
  messagingSenderId: "311670930642",
  appId: "1:311670930642:web:dd19130f285a8d50fb010b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
