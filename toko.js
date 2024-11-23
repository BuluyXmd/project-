let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseInt(e.target.getAttribute('data-price'));
        
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - Rp ${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
    });

    totalPriceContainer.textContent = `Total: Rp ${totalPrice}`;
}


let cart = JSON.parse(localStorage.getItem('cart')) || [];


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseInt(e.target.getAttribute('data-price'));

        
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));  
        updateCartCount();
    });
});

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartCount = cart.length;
    cartCountElement.textContent = cartCount;
}

updateCartCount();

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong!');
    } else {
        alert('Pembelian berhasil!');
        cart = [];
        updateCart();
    }
});