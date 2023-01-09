// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnfnDJpKZrv9jyx7FpKwddGeUW9B54z6M",
  authDomain: "pokemon-api-aaaed.firebaseapp.com",
  projectId: "pokemon-api-aaaed",
  storageBucket: "pokemon-api-aaaed.appspot.com",
  messagingSenderId: "461095169793",
  appId: "1:461095169793:web:d9d075bf570512f4153500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google= new GoogleAuthProvider()
export const pokemonComments = getFirestore()