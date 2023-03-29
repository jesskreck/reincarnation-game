// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoAu-F2QPFOsKaPgLn-auy44SBUWfWEII",
  authDomain: "game-6547b.firebaseapp.com",
  projectId: "game-6547b",
  storageBucket: "game-6547b.appspot.com",
  messagingSenderId: "547387465300",
  appId: "1:547387465300:web:38e7b554e14d79c7ea97c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);