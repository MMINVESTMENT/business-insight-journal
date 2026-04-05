// ========================================
// FIREBASE CONFIGURATION
// ========================================

// Firebase configuration (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDdM_FPc6yRG-MSK4VNFe69Gpeqt1SDWjU",
    authDomain: "journal-recording-website.firebaseapp.com",
    projectId: "journal-recording-website",
    storageBucket: "journal-recording-website.firebasestorage.app",
    messagingSenderId: "372413301932",
    appId: "1:372413301932:web:0d28e9ff98a65d58300b09",
    measurementId: "G-DGJP4KEXVQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other files
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;