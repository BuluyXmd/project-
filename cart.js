// Ambil data keranjang dari localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fungsi untuk menampilkan item dalam keranjang dan total harga
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Jika keranjang kosong, tampilkan pesan
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Keranjang Anda kosong.</p>';
        totalPriceContainer.innerHTML = '';
    } else {
        let totalPrice = 0;
        // Tampilkan setiap item di keranjang
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - Rp ${item.price}`;
            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price;
        });
        totalPriceContainer.textContent = `Total: Rp ${totalPrice}`;
    }
});

// Fungsi untuk checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong!');
    } else {
        alert('Pembelian berhasil!');
        // Hapus data keranjang setelah checkout
        localStorage.removeItem('cart');
        window.location.href = 'index.html';  // Kembali ke halaman utama
    }
});