// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ26BaFsMPtVqlPtHKy47sIEILreYEKdw",
  authDomain: "login-app-72d69.firebaseapp.com",
  projectId: "login-app-72d69",
  storageBucket: "login-app-72d69.firebasestorage.app",
  messagingSenderId: "411010856185",
  appId: "1:411010856185:web:419dc09dac4cd3bd249e28",
  measurementId: "G-0NZ1JVYWCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
