const form = document.querySelector("#form");
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")
const eye1 = document.getElementById("icon1")
const eye2 = document.getElementById("icon2")

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

eye1.onclick= function(){
  if(password.type =="password"){
    password.type ="text"
    eye1.src = "media/open.png";
  }else{
    password.type="password"
    eye1.src = "media/close.png";
  }
}

eye2.onclick = function () {
  if (cpassword.type == "password") {
    cpassword.type = "text";
    eye2.src = "media/open.png";
  } else {
    cpassword.type = "password";
    eye2.src = "media/close.png";
  }
};

function validateInputs() {
  const usernameVal = username.value.trim()
  const emailVal = email.value.trim(); 
  const passwordVal = password.value.trim(); 
  const cpasswordVal = cpassword.value.trim(); 

  let success = true;
  if (usernameVal === "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, "Password must be atlest 8 character.");
  } else {
    setSuccess(password);
  }

  if (cpasswordVal === "") {
    success = false;
    setError(cpassword, "Confirm password is required.");
  } else if (cpasswordVal !== passwordVal) {
    success = false;
    setError(cpassword, "Password does not match.");
  } else {
    setSuccess(cpassword);
  }
}

function setError(ele, mge) {
  const inptgrp = ele.parentElement;
  const errele = inptgrp.querySelector(".error");
  errele.innerText = mge;
  inptgrp.classList.add("error");
  inptgrp.classList.remove("success");
}

function setSuccess(ele) {
  const inptgrp = ele.parentElement;
  const errele = inptgrp.querySelector(".error");
  errele.innerText = "";
  inptgrp.classList.add("success");
  inptgrp.classList.remove("error");
}
const validateEmail = (emailVal) => {
  return String(emailVal).toLowerCase().match(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  );
};
