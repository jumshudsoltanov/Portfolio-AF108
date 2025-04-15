const productContainer = document.getElementById("product-container");

function renderProduct() {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (product) {
    const productHtml = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="product-details">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price">$${product.price}</p>
        <p class="product-description">Detailed description for ${product.title}.</p>
      </div>
    `;
    productContainer.innerHTML = productHtml;
  } else {
    productContainer.innerHTML = "<p>Product not found</p>";
  }
}

window.onload = renderProduct;
