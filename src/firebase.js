import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBD27mk8lMqFZAhYs6MXTusJ6KJQZbJOv0",
    authDomain: "precise-tube-382704.firebaseapp.com",
    projectId: "precise-tube-382704",
    storageBucket: "precise-tube-382704.appspot.com",
    messagingSenderId: "124573927063",
    appId: "1:124573927063:web:f679d1dd56bda85ef04bd2",
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);