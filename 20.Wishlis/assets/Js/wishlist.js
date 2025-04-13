const wishlistItems = document.getElementById('wishlistItems');

const userData = JSON.parse(localStorage.getItem('userData')) || {};


const wishlist = userData.wishlist || [];


wishlist.forEach(productId => {
  const product = products.find(p => p.id === productId);
  if (product) {
   
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `${product.name} - ${product.price}`;
    wishlistItems.appendChild(li);
  }
});
