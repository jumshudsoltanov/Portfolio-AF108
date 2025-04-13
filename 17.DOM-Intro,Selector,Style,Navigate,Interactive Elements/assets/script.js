
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.style.margin = '50px';
    card.style.width = '300px';
    card.style.border = '1px solid black';
    card.style.padding = '10px';
});

const hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
    heart.style.display = 'inline-flex';
    heart.style.alignItems = 'center';
    heart.style.justifyContent = 'center';
    heart.style.width = '30px';
    heart.style.height = '30px';
    heart.style.borderRadius = '50%';
    heart.style.backgroundColor = 'silver';
    heart.style.position = 'absolute';
    heart.style.top = '15px';
    heart.style.right = '15px';
    heart.style.cursor = 'pointer';
});


const images = document.querySelectorAll('.image');
images.forEach(image => {
    image.style.width = '100%';
    image.style.height = '300px';
    image.style.position = 'relative';
});


const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '10px';
});

const cardContents = document.querySelectorAll('.cardContent');
cardContents.forEach(content => {
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.gap = '10px';
    content.style.marginTop = '20px';
    content.style.color = 'burlywood';
});


const cardPrices = document.querySelectorAll('.cardPrice');
cardPrices.forEach(price => {
    price.style.display = 'inline-block';
    price.style.padding = '5px';
    price.style.borderRadius = '5px';
    price.style.backgroundColor = 'rgb(95, 94, 91)';
});


const shopBtns = document.querySelectorAll('.shopBtn');
shopBtns.forEach(button => {
    button.style.width = '100%';
    button.style.padding = '10px';
    button.style.backgroundColor = 'skyblue';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.color = 'white';
    button.style.textTransform = 'uppercase';
    button.style.borderRadius = '5px';
    button.style.fontWeight = 'bold';
});
