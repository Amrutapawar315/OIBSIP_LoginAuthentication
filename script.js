document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        login();
    });

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        register();
    });
});

function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorParagraph = document.getElementById('error');
    const securedPage = document.getElementById('securedPage');
    const loginForm = document.getElementById('loginForm');

    const username = usernameInput.value;
    const password = passwordInput.value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[username] && storedUsers[username] === password) {
        // Successful login
        errorParagraph.textContent = '';
        securedPage.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        // Failed login
        errorParagraph.textContent = 'Invalid login credentials. Please try again.';
    }
}

function register() {
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');
    const errorParagraph = document.getElementById('error');
    const registrationForm = document.getElementById('registrationForm');

    const newUsername = newUsernameInput.value;
    const newPassword = newPasswordInput.value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (newUsername in storedUsers) {
        // Username already exists
        errorParagraph.textContent = 'Username already exists. Please choose a different one.';
    } else {
        // Register new user
        storedUsers[newUsername] = newPassword;
        localStorage.setItem('users', JSON.stringify(storedUsers));

        // Clear registration form
        newUsernameInput.value = '';
        newPasswordInput.value = '';

        // Show login form
        registrationForm.style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
}

function showRegistrationForm() {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');
    const errorParagraph = document.getElementById('error');

    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
    errorParagraph.textContent = '';
}

function logout() {
    const securedPage = document.getElementById('securedPage');
    const loginForm = document.getElementById('loginForm');

    securedPage.style.display = 'none';
    loginForm.style.display = 'block';
}
