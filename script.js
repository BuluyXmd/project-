let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseInt(e.target.getAttribute('data-price'));
        
        // Menambahkan item ke keranjang
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));  // Simpan ke localStorage
        updateCartCount();  // Update jumlah item di keranjang
    });
});

// Fungsi untuk memperbarui jumlah item di keranjang
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartCount = cart.length;
    cartCountElement.textContent = cartCount;
}

// Panggil updateCartCount saat halaman dimuat
updateCartCount();