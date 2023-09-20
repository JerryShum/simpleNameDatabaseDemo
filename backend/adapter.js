// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPP5DJRhIXGAP6MH4V_DjNGANPwTKydOQ",
  authDomain: "simplenamedatabase.firebaseapp.com",
  projectId: "simplenamedatabase",
  storageBucket: "simplenamedatabase.appspot.com",
  messagingSenderId: "7647265729",
  appId: "1:7647265729:web:826d9b4e6af3318de2a540",
  measurementId: "G-T8FEGLC6W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore } from "firebase/firestore";

async function run() {
  const db = getFirestore(app);

  const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

  // Add a new document in collection "cities" with ID 'LA'
  const res = await db.collection('simplenamedatabase').doc('names').set(data);
  console.log('Added document with ID: ', res.id);
}

run();