// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPWKkn9b1cQOXBp0tswvOZnA0Cq_rHwz0",
  authDomain: "netflixgpt-c0564.firebaseapp.com",
  projectId: "netflixgpt-c0564",
  storageBucket: "netflixgpt-c0564.appspot.com",
  messagingSenderId: "1075018154937",
  appId: "1:1075018154937:web:9232d917a15fb7f7552c68",
  measurementId: "G-MGE0HHRJFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
