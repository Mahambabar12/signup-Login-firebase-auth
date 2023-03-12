import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBdBcd-ItknL9zRUm0vV9qQEAkMrMKj4g",
  authDomain: "fir-auth-b445e.firebaseapp.com",
  projectId: "fir-auth-b445e",
  storageBucket: "fir-auth-b445e.appspot.com",
  messagingSenderId: "1062705260968",
  appId: "1:1062705260968:web:4d9de2d5ac62cf3b84159d",
  measurementId: "G-RZZL0G3YE1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
// export const auth = firebase.auth();
// export const provider = new firebase.auth.Email/password();