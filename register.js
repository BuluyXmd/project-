document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulasikan penyimpanan data (misalnya dengan localStorage atau backend)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    alert('Akun berhasil dibuat! Silakan login.');
    window.location.href = 'kogin.html';  // Arahkan ke halaman login setelah registrasi
});