// script.js (Firebase v8 全局风格)

// 注册
function registerUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

// 登录
function loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

// 登出
function logoutUser() {
    return firebase.auth().signOut();
}

// 监听登录状态
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("已登录:", user.email);
        // 这里可以显示主内容，隐藏登录表单等
    } else {
        console.log("未登录");
        // 这里可以显示登录表单，隐藏主内容等
    }
});

// 示例：添加数据到 Firestore
function addNote(data) {
    return firebase.firestore().collection("notes").add(data);
}