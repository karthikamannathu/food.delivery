// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fooddelivery-27304.firebaseapp.com",
  projectId: "fooddelivery-27304",
  storageBucket: "fooddelivery-27304.appspot.com",
  messagingSenderId: "966405725980",
  appId: "1:966405725980:web:d15e11722ebf9ee548e4d9"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);