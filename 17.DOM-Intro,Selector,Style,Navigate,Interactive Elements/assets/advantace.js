
const card = document.createElement('div');
card.className = 'card';
card.style.width = '300px';
card.style.border = '1px solid #ccc';
card.style.borderRadius = '10px';
card.style.overflow = 'hidden';
card.style.fontFamily = 'sans-serif';
card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
card.style.margin = '20px';
card.style.backgroundColor = '#fff';


const imageWrapper = document.createElement('div');
imageWrapper.style.position = 'relative';

const img = document.createElement('img');
img.src = 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4'; // eyni şəkil
img.alt = 'House';
img.style.width = '100%';
img.style.height = 'auto';

const heart = document.createElement('div');
heart.innerHTML = '<i class="fa-regular fa-heart"></i>';
heart.style.position = 'absolute';
heart.style.top = '10px';
heart.style.right = '10px';
heart.style.fontSize = '20px';
heart.style.color = '#fff';
heart.style.backgroundColor = 'rgba(0,0,0,0.3)';
heart.style.padding = '8px';
heart.style.borderRadius = '50%';
heart.style.cursor = 'pointer';

imageWrapper.appendChild(img);
imageWrapper.appendChild(heart);


const content = document.createElement('div');
content.style.padding = '16px';


const titleRow = document.createElement('div');
titleRow.style.fontSize = '12px';
titleRow.style.fontWeight = 'bold';
titleRow.style.color = '#666';
titleRow.innerText = 'DETACHED HOUSE • 5Y OLD';


const price = document.createElement('div');
price.innerText = '$750,000';
price.style.fontSize = '24px';
price.style.fontWeight = 'bold';
price.style.marginTop = '4px';


const address = document.createElement('div');
address.innerText = '742 Evergreen Terrace';
address.style.fontSize = '14px';
address.style.color = '#555';
address.style.marginTop = '4px';

const infoRow = document.createElement('div');
infoRow.style.display = 'flex';
infoRow.style.justifyContent = 'space-between';
infoRow.style.marginTop = '16px';

const bedrooms = document.createElement('div');
bedrooms.innerHTML = '🛏️ <strong>3</strong> Bedrooms';
bedrooms.style.fontSize = '14px';

const bathrooms = document.createElement('div');
bathrooms.innerHTML = '🛁 <strong>2</strong> Bathrooms';
bathrooms.style.fontSize = '14px';

infoRow.appendChild(bedrooms);
infoRow.appendChild(bathrooms);

const realtor = document.createElement('div');
realtor.style.display = 'flex';
realtor.style.alignItems = 'center';
realtor.style.marginTop = '16px';
realtor.style.borderTop = '1px solid #eee';
realtor.style.paddingTop = '12px';

const avatar = document.createElement('img');
avatar.src = 'https://randomuser.me/api/portraits/women/44.jpg';
avatar.alt = 'Realtor';
avatar.style.width = '40px';
avatar.style.height = '40px';
avatar.style.borderRadius = '50%';
avatar.style.marginRight = '12px';

const realtorInfo = document.createElement('div');
const name = document.createElement('div');
name.innerHTML = '<strong>Tiffany Heffner</strong>';
const phone = document.createElement('div');
phone.innerText = '(555) 555-4321';
phone.style.fontSize = '12px';
phone.style.color = '#666';

realtorInfo.appendChild(name);
realtorInfo.appendChild(phone);

realtor.appendChild(avatar);
realtor.appendChild(realtorInfo);


content.appendChild(titleRow);
content.appendChild(price);
content.appendChild(address);
content.appendChild(infoRow);
content.appendChild(realtor);

card.appendChild(imageWrapper);
card.appendChild(content);

document.body.appendChild(card);
