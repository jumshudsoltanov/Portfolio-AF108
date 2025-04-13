
const displayUsername = document.getElementById("displayUsername");
const settingsForm = document.getElementById("settingsForm");
const newUsernameInput = document.getElementById("newUsername");
const newEmailInput = document.getElementById("newEmail");
const newPasswordInput = document.getElementById("newPassword");


let userData = JSON.parse(localStorage.getItem("userData")) ?? [];


document.addEventListener("DOMContentLoaded", () => {
  const currentUser = userData.find(user => user.isLogin === true);

  if (currentUser) {
    displayUsername.textContent = currentUser.username;
    newUsernameInput.value = currentUser.username;
    newEmailInput.value = currentUser.email;
    newPasswordInput.value = currentUser.password;
  }
});


settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentUser = userData.find(user => user.isLogin === true);

  if (currentUser) {
    currentUser.username = newUsernameInput.value;
    currentUser.email = newEmailInput.value;
    currentUser.password = newPasswordInput.value;

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Ayarlar uğurla yeniləndi!");
    const modal = bootstrap.Modal.getInstance(document.getElementById('settingsModal'));
    modal.hide();

    displayUsername.textContent = currentUser.username;
  } else {
    alert("Giriş etməmisiniz!");
  }
});
