// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, getDoc, updateDoc, onSnapshot, addDoc, doc } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'
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

let contactData;
let taskTodoData;
let taskAwaitData;
let taskInProgressData;
let taskDoneData;
let categories;
let categoryColors;
let categoriesBackground;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getData() {
    const databaseCollection = collection(db, 'database');
    const dataSnapshot = await getDocs(databaseCollection);
    const documentData = dataSnapshot.docs.map(doc => doc.data());
    //const DataAsJSON = JSON.stringify(documentData);

    // Hier fügst du den Code für die Echtzeitaktualisierung hinzu
    onSnapshot(databaseCollection, (querySnapshot) => {
        const updatedDocumentData = querySnapshot.docs.map(doc => doc.data());
        //console.log("Updated data in real-time:", updatedDocumentData);
        // Hier kannst du die aktualisierten Daten im Browser rendern oder verwenden
        const data = {
            "categories": JSON.stringify(updatedDocumentData[0]['categories']),
            "categoriesBackground": JSON.stringify(updatedDocumentData[1]['categoriesBackground']),
            "categoryColors": JSON.stringify(updatedDocumentData[2]['categoryColors']),
            "contacts": updatedDocumentData[3]['contacts'],
            "registeredUsers": (updatedDocumentData[4]['registeredUsers']),
            "tasksAwaitFeedback": (updatedDocumentData[5]['tasksAwaitFeedback']),
            "tasksDone": (updatedDocumentData[6]['tasksDone']),
            "tasksInProgress": (updatedDocumentData[7]['tasksInProgress']),
            "tasksToDo": (updatedDocumentData[8]['tasksToDo'])
        };

        const dataAsJSON = JSON.stringify(data, null, 2); // Konvertiere in JSON
        contactData = updatedDocumentData[3]['contacts'];
        taskTodoData = updatedDocumentData[8]['tasksToDo'];
        taskAwaitData = updatedDocumentData[5]['tasksAwaitFeedback'];
        taskInProgressData = updatedDocumentData[7]['tasksInProgress'];
        taskDoneData = updatedDocumentData[8]['tasksToDo'];
        categories = JSON.stringify(updatedDocumentData[0]['categories']);
        categoryColors = JSON.stringify(updatedDocumentData[2]['categoryColors']);
        categoriesBackground = JSON.stringify(updatedDocumentData[1]['categoriesBackground']);
        handleCategories(categories);
        handleCategoryColors(categoryColors);
        handleCategoryBackground(categoriesBackground);
        handleContactData(contactData);
        handleTaskTodoData(taskTodoData);
        handleTaskAwaitData(taskAwaitData);
        handleTaskInProgData(taskInProgressData);
        handleTaskDoneData(taskDoneData);
    });
}

getData()

function handleCategories(categories) {
    window.FireCategory = categories;
}

function handleCategoryColors(categoryColors) {
    window.FireCategoryColors = categoryColors;
}

function handleCategoryBackground(categoriesBackground) {
    window.FireCategoryBackground = categoriesBackground;
}

function handleTaskDoneData(taskDoneData) {
    window.FirebaseDone = taskDoneData;
}

function handleTaskInProgData(taskInProgressData) {
    window.FirebaseProgData = taskInProgressData;
}

function handleTaskAwaitData(taskAwaitData) {
    window.DirebaseAwaitData = taskAwaitData;
}

function handleTaskTodoData(taskTodoData) {
    window.FirebaseTodo = taskTodoData;
}

function handleContactData(data) {
    window.FirebaseContacts = data;
}

