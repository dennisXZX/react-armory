import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBbkaKCMH8g9DOYMSiH84iTTc1GDIxf8Jw",
    authDomain: "facebook-clone-b066a.firebaseapp.com",
    databaseURL: "https://facebook-clone-b066a.firebaseio.com",
    projectId: "facebook-clone-b066a",
    storageBucket: "facebook-clone-b066a.appspot.com",
    messagingSenderId: "1014586473086",
    appId: "1:1014586473086:web:28ec25c58bcdd7fc1df62f"
};

// Connect your app with firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Access firestore database
const db = firebaseApp.firestore();

// Initialise Google Auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
