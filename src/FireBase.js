// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwrx1GYz2TQatTz5_Kyt6AuZWVTbAGs7o",
  authDomain: "myproj-d61cc.firebaseapp.com",
  databaseURL: "https://myproj-d61cc-default-rtdb.firebaseio.com",
  projectId: "myproj-d61cc",
  storageBucket: "myproj-d61cc.appspot.com",
  messagingSenderId: "482910075658",
  appId: "1:482910075658:web:413c0fd1fa195cd5f358f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);