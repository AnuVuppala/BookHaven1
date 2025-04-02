document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            authenticateUser(email, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            registerUser(email, password);
        });
    }
});

function authenticateUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
}

function registerUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) {
        alert('Email already registered');
        return;
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    window.location.href = 'login.html';
}
