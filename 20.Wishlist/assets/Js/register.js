
// * Form Data
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#passwordRepeat");
const btnRegister = document.getElementById("btnRegister");


let storageData = [];

try {
  const data = JSON.parse(localStorage.getItem("userData"));
  if (Array.isArray(data)) {
    storageData = data;
  }
} catch (err) {
  console.error("Storage parse error:", err);
}

const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'];

btnRegister.addEventListener("click", (event) => {
  event.preventDefault();

  const pass = password.value;
  let hasUpper = false;
  let hasSpecial = false;

  for (let i = 0; i < pass.length; i++) {
    const char = pass[i];
    if (char >= 'A' && char <= 'Z') {
      hasUpper = true;
    }
    if (specialChars.includes(char)) {
      hasSpecial = true;
    }
  }

  if (!hasUpper) {
    alert("Parolda ən az bir böyük hərf olmalıdır!");
    return;
  }

  if (!hasSpecial) {
    alert("Parolda ən az bir xüsusi simvol olmalıdır! (məs: !@#$%^&*)");
    return;
  }

  if (password.value !== passwordRepeat.value) {
    alert("Parol və təkrar parol uyğun deyil!");
    return;
  }

  const isDuplicate = storageData.some(user =>
    user.username === username.value || user.email === email.value
  );

  if (isDuplicate) {
    alert("Bu istifadəçi adı və ya email artıq qeydiyyatdan keçib!");
    return;
  }

  const userID = Math.floor(Math.random() * 2000);

  const userData = {
    id: userID,
    username: username.value,
    email: email.value,
    password: password.value,
    isLogin: false,
    wishList: [
      {
        productID: undefined
      }
    ]
  };

  storageData.push(userData);
  localStorage.setItem("userData", JSON.stringify(storageData));

  alert("Qeydiyyat uğurla tamamlandı!");

  document.querySelector("form").reset();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
