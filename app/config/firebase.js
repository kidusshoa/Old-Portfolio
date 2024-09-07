// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRFlOsenvrsm9F4UTS_61vZ5pF4V0jreM",
  authDomain: "my-portfolio-41867.firebaseapp.com",
  projectId: "my-portfolio-41867",
  storageBucket: "my-portfolio-41867.appspot.com",
  messagingSenderId: "882145533206",
  appId: "1:882145533206:web:f3c0c33ced45d933bd4437",
  measurementId: "G-6P7Z4PM892",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, ref, push, set };
