//! Check Login Form Data

const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
let userDataLogin = JSON.parse(localStorage.getItem("userData")) ?? [];

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  // ! Check Input
  let isLogin = false; 

  userDataLogin.forEach(function (user) {
    
    if (username.value === user.username && password.value === user.password) {
        isLogin = true;
        user.isLogin = true; 
    }
  });

  if (isLogin == true) {
    console.log("Login Successful!");

  
    localStorage.setItem("userData", JSON.stringify(userDataLogin));


    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  } else {
    alert("Login Failed! Invalid username or password.");
  }
});
