const productList = document.getElementById("product-list");

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/250",
  },
  {
    id: 2,
    title: "Product 2",
    price: 150,
    image: "https://via.placeholder.com/250",
  },
  {
    id: 3,
    title: "Product 3",
    price: 200,
    image: "https://via.placeholder.com/250",
  },
  {
    id: 4,
    title: "Product 4",
    price: 120,
    image: "https://via.placeholder.com/250",
  },
  {
    id: 5,
    title: "Product 5",
    price: 180,
    image: "https://via.placeholder.com/250",
  },
];

function renderProducts() {
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("col-md-3", "product-item");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <div class="product-title">${product.title}</div>
      <div class="product-price">$${product.price}</div>
    `;

    productElement.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product-detail.html?id=" + product.id;
    });

    productList.appendChild(productElement);
  });
}

window.onload = renderProducts;
