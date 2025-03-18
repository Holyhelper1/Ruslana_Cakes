// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuaeSyx21PlFZPpw4Nso8A2_J5Z1KGR_4",
  authDomain: "ruslana-cakes.firebaseapp.com",
  projectId: "ruslana-cakes",
  storageBucket: "ruslana-cakes.firebasestorage.app",
  messagingSenderId: "645062619826",
  appId: "1:645062619826:web:f752b588fc41d417978fab",
  measurementId: "G-NE6QB30C2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);