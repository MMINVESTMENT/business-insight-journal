var firebaseConfig = {
  apiKey: "AIzaSyDdM_FPc6yRG-MSK4VNFeG9Gpeq1SDWjU",
  authDomain: "journal-recoding-website.firebaseapp.com",
  projectId: "journal-recoding-website",
  storageBucket: "journal-recoding-website.firebasestorage.app",
  messagingSenderId: "372413301932",
  appId: "1:372413301932:web:0d28e9ff98a65d58300b09",
  measurementId: "G-DGJP4KEXVQ"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();