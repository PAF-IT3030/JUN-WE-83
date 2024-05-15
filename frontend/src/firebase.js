// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "paf-project-71aef.firebaseapp.com",
  projectId: "paf-project-71aef",
  storageBucket: "paf-project-71aef.appspot.com",
  messagingSenderId: "1041651584434",
  appId: "1:1041651584434:web:5501064744a786bc2728ab",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
