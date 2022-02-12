// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrdAd_lEPfVkWhxoW7PRcwPUtA23SODCo",
  authDomain: "fountain-37243.firebaseapp.com",
  projectId: "fountain-37243",
  storageBucket: "fountain-37243.appspot.com",
  messagingSenderId: "41981661006",
  appId: "1:41981661006:web:aa4d5d88618760848e981f",
  measurementId: "G-M8XXSWX2D8"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getDatabase();