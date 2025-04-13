const card = document.querySelector(".card");
const heart = card.querySelector(".heart");
const image = card.querySelector(".image img");
const title = card.querySelector(".cardTitle");
const text = card.querySelector(".cardText");
const price = card.querySelector(".cardPrice");
const button = card.querySelector(".shopBtn");

heart.onclick = function () {
  const productDetails = {
    image: image.src,
    title: title.textContent,
    text: text.textContent,
    price: price.textContent,
  };
  console.log(productDetails);
};

heart.onclick = function (event) {
  const card = event.target.closest(".card");
  const image = card.querySelector(".image img");
  const title = card.querySelector(".cardTitle");
  const text = card.querySelector(".cardText");
  const price = card.querySelector(".cardPrice");

  const productDetails = {
    image: image.src,
    title: title.textContent,
    text: text.textContent,
    price: price.textContent,
  };
  console.log(productDetails);
};
