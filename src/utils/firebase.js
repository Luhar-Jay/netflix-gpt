// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIK-AZIbVu99I0tV2-whZ6DGKR3NLc75s",
  authDomain: "netflixgpt-9859c.firebaseapp.com",
  projectId: "netflixgpt-9859c",
  storageBucket: "netflixgpt-9859c.appspot.com",
  messagingSenderId: "389714429340",
  appId: "1:389714429340:web:1c5a5c01587fb600f17459",
  measurementId: "G-13S2XK3TH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
