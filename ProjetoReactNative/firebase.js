// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCLOwi85ikkJirvGhwVje1W41iXhsTGU",
  authDomain: "platinum-scout-371220.firebaseapp.com",
  projectId: "platinum-scout-371220",
  storageBucket: "platinum-scout-371220.appspot.com",
  messagingSenderId: "720515737791",
  appId: "1:720515737791:web:9f947f12d09714faa4be0a",
  measurementId: "G-690RQL20BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);