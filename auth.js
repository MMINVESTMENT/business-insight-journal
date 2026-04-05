// ========================================
// AUTHENTICATION FUNCTIONS
// ========================================

// Current user state
let currentUser = null;

// Auth state observer
firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    if (user) {
        // User is signed in
        console.log('User signed in:', user.email);
        // Hide login form, show app content
        showAppContent();
    } else {
        // User is signed out
        console.log('User signed out');
        // Show login form, hide app content
        showLoginForm();
    }
});

// Login function
async function loginUser(email, password) {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('Login successful');
        return userCredential.user;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

// Register function (optional)
async function registerUser(email, password) {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('Registration successful');
        return userCredential.user;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Logout function
async function logoutUser() {
    try {
        await firebase.auth().signOut();
        console.log('Logout successful');
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
}

// Check if user is authenticated
function isAuthenticated() {
    return currentUser !== null;
}

// Get current user ID
function getCurrentUserId() {
    return currentUser ? currentUser.uid : null;
}

// UI helpers (to be called from HTML)
function showLoginForm() {
    const loginForm = document.getElementById('login-form');
    const appContent = document.getElementById('app-content');
    if (loginForm) loginForm.style.display = 'block';
    if (appContent) appContent.style.display = 'none';
}

function showAppContent() {
    const loginForm = document.getElementById('login-form');
    const appContent = document.getElementById('app-content');
    if (loginForm) loginForm.style.display = 'none';
    if (appContent) appContent.style.display = 'block';
}