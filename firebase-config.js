// firebase-config.js (Firebase v8 全局风格)
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
// 初始化
firebase.initializeApp(firebaseConfig);
// 可选：方便后续直接用
var auth = firebase.auth();
var db = firebase.firestore();