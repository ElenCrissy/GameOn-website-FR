function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData"); 
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.querySelector("form");

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//#1 close modal event
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


//#2 validation for submit
form.addEventListener("click", (e) => {
  e.preventDefault();

  if(first.value === "" || first.value.length < 2){
    setErrorFor(first, "Veuillez entrer 2 caractères ou plus");
  }

});

  function setErrorFor(input, message) {
    //add error message
    var error = document.getElementsByClassName("error");
    
    error.textContent = message;
    error.style.color = "red";
    error.style.fontSize = "10px";
    input.style.borderColor = "red";
    input.style.borderWidth = "2px";
  }





