import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRt1f7RE5i1eshGnQKhJvRkcZ8reUiPyc",
  authDomain: "complaint-forum-ffb1d.firebaseapp.com",
  projectId: "complaint-forum-ffb1d",
  storageBucket: "complaint-forum-ffb1d.appspot.com",
  messagingSenderId: "245661634597",
  appId: "1:245661634597:web:4405cda5a1e7e6b77a2fcc",
  measurementId: "G-L5Y8G0TVEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

