// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCY-89AzPyGEjK3pGm8P7csDTvuOp3w6Q",
  authDomain: "sge-login-campuscamarafp.firebaseapp.com",
  projectId: "sge-login-campuscamarafp",
  storageBucket: "sge-login-campuscamarafp.appspot.com",
  messagingSenderId: "977930614756",
  appId: "1:977930614756:web:79b7c20376684f10df39f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);