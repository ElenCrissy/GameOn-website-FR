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
const form = document.getElementById("reserve");
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMsg = document.getElementById("confirmationMsg");

const first = document.getElementById("first");
const firstError = document.getElementById("firstError");

const last = document.getElementById("last");
const lastError = document.getElementById("lastError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const birthdate = document.getElementById("birthdate"); 
const birthdateError = document.getElementById("birthdateError");

const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const location2 = document.getElementsByName("location");
const locationError = document.getElementById("locationError");

const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");



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
closeBtnRed.style.display = "none";
confirmationMsg.style.display = "none";

let formOk = true;

function checkInputs(){
  
  if(first.value === "" || first.length < 2) {
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    firstError.style.fontSize = "10px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    return formOk = false;
  } else {
    firstError.style.display = "none";
    first.style = "default";
  }

  if(last.value === "" || last.length < 2) {
    lastError.textContent = "Veuillez entrer 2 caractères minimum";
    lastError.style.color = "red";
    lastError.style.fontSize = "10px";
    last.style.borderColor = "red";
    last.style.borderWidth = "2px";
    return formOk === false;
  }  else {
    lastError.style.display = "none";
    last.style = "default";
  }

  var verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(verifEmail.exec(email.value) === null) {
    emailError.textContent = "Veuillez renseigner votre adresse mail";
    emailError.style.color = "red";
    emailError.style.fontSize = "10px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return formOk === false;
  } else {
    emailError.style.display = "none";
    email.style = "default";
  }

  if(!birthdate.value) {
    birthdateError.textContent =  "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "10px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return formOk === false;
  } else {
    birthdateError.style.display = "none";
    birthdate.style = "default";
  }

  if(quantity.value === "" || quantity.value == NaN) {
    quantityError.textContent = "Veuillez renseigner ce champ";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "10px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return formOk === false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  }

  if(!(location2[0].checked || location2[1].checked || location2[2].checked || location2[3].checked || location2[4].checked || location2[5].checked)) {
    locationError.textContent = "Veuillez choisir une option";
    locationError.style.color = "red";
    locationError.style.fontSize = "10px";
    return formOk === false;
  } else {
    locationError.style.display = "none";
    location2.style = "default";
  }

  if(!conditions.checked) { 
    conditionsError.textContent = "Veuillez vérifier que vous avez accepté les termes et conditions";
    conditionsError.style.color = "red";
    conditionsError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    return formOk === false;
  } else {
    conditionsError.style.display = "none";
    conditions.style = "default";
  }
};

function validate(event){
  checkInputs();
  //if(!(first === false && last === false && email === false && birthdate === false && quantity === false && location2 === false && conditions === false)){
  //if(first === false || last === false || email === false || birthdate === false || quantity === false || location2 === false || conditions === false) { 
  if(formOk = false) {
    event.preventDefault();
  } else { 
    confirmationMsg.style.fontSize = "36px";
    confirmationMsg.style.textAlign = "center";

    closeBtnRed.style.display = "block";
    submitBtn.style.display = "none";
    confirmationMsg.style.display = "block";
    closeBtnRed.addEventListener("click", closeModal);
    return true;
  }
};


form.addEventListener("submit", validate);

