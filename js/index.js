//! ALL VARIABLES ----->
let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let loginAlert = document.getElementById("loginAlert");
let alertSuccess = document.getElementById("alertSuccess");
let btnLogin = document.querySelector("#btnLogin");
let eye = document.getElementById('show-password');

let allUsers = [];
//! ALL VARIABLES ----->

if (localStorage.getItem("person") !== null) {
  allUsers = JSON.parse(localStorage.getItem("person"));
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

function login() {
  let userData = {
    email: emailInput.value,
    pass: passInput.value,
  };
  if (isLoginValid(userData) == true) {
    alertSuccess.classList.replace("d-none", "d-block");
    loginAlert.classList.replace("d-block", "d-none");
    setTimeout(() => {
        window.location.href = "./welcome.html";
    },1000);

  } else {
    loginAlert.classList.replace("d-none", "d-block");
    alertSuccess.classList.replace("d-block", "d-none");
  }
}

function isLoginValid(userData) {
  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&
      allUsers[i].pass.toLowerCase() == userData.pass.toLowerCase()
    ) {
      localStorage.setItem('username' , allUsers[i].name )
      return true;
    }
  }
}
eye.addEventListener('click' , function(){
  eye.classList.toggle("fa-eye-slash");
  const type = passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type" , type)
})