// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-cayHWxpqonHTNIFQGxiLF5018n_8Gok",
    authDomain: "join-98c25.firebaseapp.com",
    projectId: "join-98c25",
    storageBucket: "join-98c25.appspot.com",
    messagingSenderId: "956633801475",
    appId: "1:956633801475:web:5809838d05a46a6de3bf36",
    measurementId: "G-9TMJ40ZZY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


console.log(db)