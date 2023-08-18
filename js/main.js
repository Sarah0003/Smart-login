var signUpName = document.querySelector("#signUpName");
var signUpIEmail = document.querySelector("#signUpIEmail");
var signUpPassword = document.querySelector("#signUpPassword");
var registerBtn = document.querySelector("#registerBtn");
var wrong = document.querySelector("#wrong");

var signInIEmail = document.querySelector("#signInIEmail");
var signInPassword = document.querySelector("#signInPassword");
var inputElement = document.querySelectorAll("input");
var success=document.querySelector("#success")
var userData;
var userListName = userData;

if (localStorage.getItem("userListName") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userListName"));
  console.log(userData);
}

function signUp() {

  var isNameValid = validateName();
  var isEmailValid = validateEmail();
  if (isNameValid && isEmailValid) {
    var user = {
      name: signUpName.value,
      email: signUpIEmail.value,
      password: signUpPassword.value,
    };

    for (var i = 0; i < userData.length; i++) {
      if (userData[i].email == user.email) {
        exists.classList.replace("d-none", "d-flex");
        return;
      }
    }

    userData.push(user);
    success.classList.replace( "d-none","d-flex");

    storage();
    console.log(userData);
  }
}

function storage() {
  localStorage.setItem("userListName", JSON.stringify(userData));
}

function signIn() {
  var userSign = {
    email: signInIEmail.value,
    password: signInPassword.value,
  };
  let flag = false;
  for (var i = 0; i < userData.length; i++) {
    if (
      userData[i].email === userSign.email &&
      userData[i].password === userSign.password
    ) {
      flag = true;
      localStorage.setItem("sessionUsername", JSON.stringify(userData[i].name));
      window.location.href = "home.html";
      // wrong.classList.st("d-none", "d-flex");
      break;
    }
  }
  if (flag == true) {
    wrong.classList.replace("d-flex", "d-none");
  } else {
    wrong.classList.replace("d-none", "d-flex");
  }
}
var username;
if (localStorage.getItem("sessionUsername") == null) {
  username = "";
} else {
  username = JSON.parse(localStorage.getItem("sessionUsername"));
  document.getElementById("username").innerHTML = "Welcome " + username;
}
// var regexName= /^[A-Z][a-z0-9]{3,}$/;

// var regeEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

userName.addEventListener("input", validateUserName);

function validateSiteName() {
  validateInput(siteName, regexName);
}

function clear() {
  signUpName.value = "";
  signUpIEmail.value = "";
  signUpPassword.value = "";
}

function validateEmail() {
  var regeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regeEmail.test(signUpIEmail.value) == true) {
    signUpIEmail.style.border = "none";
    document.getElementById("wrongMail").classList.add("d-none");

    return true;
  } else {
    signUpIEmail.style.border = "5px solid red";
    wrongMail.classList.replace("d-none", "d-flex");
    return false;
  }
}
function validateName() {
  var regeName = /^[A-Z][a-z]{3,}[0-9]{0,}$/;
  if (regeName.test(signUpName.value) == true) {
    signUpName.style.border = "none";
    document.getElementById("wrongName").classList.add("d-none");

    return true;
  } else {
    signUpName.style.border = "5px solid red";
    wrongName.classList.replace("d-none", "d-flex");
    return false;
  }
}
