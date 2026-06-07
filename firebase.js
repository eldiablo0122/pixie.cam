// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3yURmqHxOy9ZBKPJ-h4ADY0PzGDz1T3Q",
  authDomain: "pixiecam-e4bc7.firebaseapp.com",
  projectId: "pixiecam-e4bc7",
  storageBucket: "pixiecam-e4bc7.firebasestorage.app",
  messagingSenderId: "68107632780",
  appId: "1:68107632780:web:44db77b9be0b366e26bba9",
  measurementId: "G-BSP9CDNMGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);