Firebase:

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIVewKXlA8GAyvtYbfM2Y8dfYk-YJglRU",
  authDomain: "the-elite-companion-club.firebaseapp.com",
  projectId: "the-elite-companion-club",
  storageBucket: "the-elite-companion-club.firebasestorage.app",
  messagingSenderId: "136666980073",
  appId: "1:136666980073:web:7d1e63a0841322232e1a78",
  measurementId: "G-23909LPCHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


--------------------------------------------------------------------------------------------------------------------------------