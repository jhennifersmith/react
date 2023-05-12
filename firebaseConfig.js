// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKrkdDcE0TbOr5ZZtq5abjxMJ5MUk2Crc",
  authDomain: "firstproject-366c6.firebaseapp.com",
  projectId: "firstproject-366c6",
  storageBucket: "firstproject-366c6.appspot.com",
  messagingSenderId: "37756979115",
  appId: "1:37756979115:web:fb81484530e726cf9bf4ee",
  measurementId: "G-4MQ5V0E790"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);