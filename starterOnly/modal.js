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
form.addEventListener("submit", function validate (e) {
  e.preventDefault();
  const inputs = form.querySelectorAll("input");
  
  const closeBtnRed = document.getElementById("closeBtnRed");
  

  checkInputs();

 /* if(inputs === true){
    blabla.textContent = "Merci ! Votre réservation a été reçue.";
    blabla.style ??
    closeBtnRed.style.display = "none";


  } else { 
    e.preventDefault();
    checkInputs()
  }*/

});


function checkInputs(){
  
  const first = document.getElementById("first");
  const firstError = document.getElementById("firstError");
  
  if(first.value === "" || first.length < 2) {
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    firstError.style.fontSize = "10px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    return false;
  } else {
    firstError.style.display = "none";
    first.style = "default";
  };
  
  const last = document.getElementById("last");
  const lastError = document.getElementById("lastError");

  if(last.value === "" || last.length < 2) {
    lastError.textContent = "Veuillez entrer 2 caractères minimum";
    lastError.style.color = "red";
    lastError.style.fontSize = "10px";
    last.style.borderColor = "red";
    last.style.borderWidth = "2px";
    return false;
  }  else {
    lastError.style.display = "none";
    last.style = "default";
  };
  
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  var verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
  if(verifEmail.exec(email.value) == null) {
    emailError.textContent = "Veuillez renseigner votre adresse mail";
    emailError.style.color = "red";
    emailError.style.fontSize = "10px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return false;
  } else {
    emailError.style.display = "none";
    email.style = "default";
  };

  const birthdate = document.getElementById("birthdate"); 
  const birthdateError = document.getElementById("birthdateError");

  if(!birthdate.value) {
    birthdateError.textContent =  "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "10px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return false;
  } else {
    birthdateError.style.display = "none";
    birthdate.style = "default";
  };

  const quantity = document.getElementById("quantity");
  const quantityError = document.getElementById("quantityError");

  if(quantity.value === "" || quantity.value == NaN) {
    quantityError.textContent = "Veuillez renseigner ce champ";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "10px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  };

  const location = document.getElementsByName("location");
  const locationError = document.getElementById("locationError");

  if(!(location[0].checked || location[1].checked || location[2].checked || location[3].checked || location[4].checked || location[5].checked)) {
    locationError.textContent = "Veuillez choisir une option";
    locationError.style.color = "red";
    locationError.style.fontSize = "10px";
    return false;
  } else {
    locationError.style.display = "none";
    location.style = "default";
  };

  const conditions = document.getElementById("checkbox1");
  const conditionsError = document.getElementById("conditionsError");

  if(!conditions.checked) { 
    conditionsError.textContent = "Veuillez vérifier que vous avez accepté les termes et conditions";
    conditionsError.style.color = "red";
    conditionsError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    return false;
  } else {
    conditionsError.style.display = "none";
    conditions.style = "default";
  };
}