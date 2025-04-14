const products = [
    { id: 1, name: 'Alma', price: 1.2, img: 'https://picsum.photos/seed/apple/400/300' },
    { id: 2, name: 'Banan', price: 1.8, img: 'https://picsum.photos/seed/banana/400/300' },
    { id: 3, name: 'Portağal', price: 1.5, img: 'https://picsum.photos/seed/orange/400/300' },
    { id: 4, name: 'Çiyələk', price: 2.0, img: 'https://picsum.photos/seed/strawberry/400/300' }
  ];
  
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function updateProductList() {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
  
    products.forEach(product => {
      const quantity = cart[product.id] || 0;
      const col = document.createElement("div");
      col.className = "col-md-3";
  
      col.innerHTML = `
        <div class="card" style="background-image: url('${product.img}')">
          <div class="overlay">
            <h5>${product.name}</h5>
            <p>${product.price} manat</p>
            <div class="d-flex align-items-center">
              <button class="btn btn-sm btn-danger" onclick="decrease(${product.id})">-</button>
              <span class="counter">${quantity}</span>
              <button class="btn btn-sm btn-success" onclick="increase(${product.id})">+</button>
            </div>
          </div>
        </div>
      `;
      list.appendChild(col);
    });
  }
  
  function updateCartModal() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
  
    const items = Object.entries(cart).filter(([_, qty]) => qty > 0);
  
    if (items.length === 0) {
      cartItems.innerHTML = "<p>Səbətiniz boşdur.</p>";
      return;
    }
  
    items.forEach(([id, qty]) => {
      const product = products.find(p => p.id == id);
      const item = document.createElement("div");
      item.className = "mb-2";
      item.innerHTML = `<strong>${product.name}</strong> — ${qty} ədəd — ${product.price * qty} manat`;
      cartItems.appendChild(item);
    });
  }
  
  function increase(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    updateProductList();
  }
  
  function decrease(id) {
    if (cart[id]) {
      cart[id]--;
      if (cart[id] <= 0) delete cart[id];
      saveCart();
      updateProductList();
    }
  }
  
  document.getElementById("cartModal").addEventListener("show.bs.modal", updateCartModal);
  
  updateProductList();
  