// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkada7dIVzZuvSQiiz5pVASeJmHZmKs9s",
  authDomain: "ecommerce-diego-b16a2.firebaseapp.com",
  projectId: "ecommerce-diego-b16a2",
  storageBucket: "ecommerce-diego-b16a2.appspot.com",
  messagingSenderId: "906532317607",
  appId: "1:906532317607:web:56714db77789bad5916e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)


export const db = getFirestore(app);

export const auth = getAuth(app);