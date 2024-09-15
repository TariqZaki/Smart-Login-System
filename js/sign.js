//! ALL VARIABLES ---->
let registerForm = document.getElementById("registerForm");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertPass = document.getElementById("alertPass");
let alertSuccess = document.getElementById("alertSuccess");
let alertExist = document.getElementById("alertExist");
let btnSign = document.getElementById("btnSign");
let eye = document.getElementById('show-password');

let allUsers = [];
//! ALL VARIABLES ---->

if (localStorage.getItem("person") !== null) {
  allUsers = JSON.parse(localStorage.getItem("person"));
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkIfAllInputsAreValid()) {
    addUser();
  }
});

function addUser() {
  let newUser = {
    name: nameInput.value,
    email: emailInput.value,
    pass: passInput.value,
  };
  if (isExist(newUser) == true) {
    alertExist.classList.replace("d-none", "d-block");
    alertSuccess.classList.replace("d-block", "d-none");
  } 
  else {
    allUsers.push(newUser);
    localStorage.setItem("person", JSON.stringify(allUsers));
    alertExist.classList.replace("d-block", "d-none");
    alertSuccess.classList.replace("d-none", "d-block");
    setTimeout( () => {
      window.location.href = "./index.html"
    },1000 )
  }
}

function isExist(newUser) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
      console.log("isExist");
      return true;
    }
  }
}

function validateAllInputs(regex, element, alertMsg) {
  let pattern = regex;

  if (pattern.test(element.value) == true) {
    alertMsg.classList.replace("d-block", "d-none");
    return true;
  } else {
    alertMsg.classList.replace("d-none", "d-block");
    return false;
  }
}

function checkIfAllInputsAreValid() {
  if (
    validateAllInputs(/^[a-zA-Z]{3,}$/, nameInput, alertName) &&
    validateAllInputs(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      emailInput,
      alertEmail
    ) &&
    validateAllInputs(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      passInput,
      alertPass
    )
  ) {
    return true;
  } else {
    return false;
  }
}

eye.addEventListener('click' , function(){
  eye.classList.toggle("fa-eye-slash");
  const type = passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type" , type)
})