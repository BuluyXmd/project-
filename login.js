document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Implementasikan logika login sederhana (misalnya memeriksa email dan password yang hardcoded)
    if (email === "user@example.com" && password === "password123") {
        alert('Login berhasil!');
        window.location.href = 'index.html';  // Arahkan ke halaman utama setelah login
    } else {
        alert('Email atau password salah!');
    }
});