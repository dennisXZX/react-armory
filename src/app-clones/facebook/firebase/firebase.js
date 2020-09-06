import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAKRrVLc_ENzRRDfh7rPYazT3v8Xd3QjKY",
    authDomain: "react-clones-6b098.firebaseapp.com",
    databaseURL: "https://react-clones-6b098.firebaseio.com",
    projectId: "react-clones-6b098",
    storageBucket: "react-clones-6b098.appspot.com",
    messagingSenderId: "655308600164",
    appId: "1:655308600164:web:150bdba4ec2b7feb618071"
};

// Connect your app with firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Access firestore database
const db = firebaseApp.firestore();

// Initialise Google Auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
