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

const error = document.getElementsByClassName("error");


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
  checkInputs();

  /*if(inputs === true){
    blabla.textContent = "Merci ! Votre réservation a été reçue.";
    blabla.style ??
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

  if(!isValidDate(birthdate.value)) {
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

  if(quantity.value === "" || quantity.value!= Number) {
    quantityError.textContent = "Veuillez renseigner ce champ";
    return false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  };

  const location = document.querySelector("input[type=radio]:checked");
  const locationError = document.getElementById("locationError");


  if(location != selected) {
    quantityError.textContent = "Veuillez choisir une option";
    return false;
  } else {
    locationError.style.display = "none";
    location.style = "default";
  };

  const checkbox1 = document.getElementById("checkbox1");
  const checkbox1Error = document.getElementById("checkbox1Error");

  if(checkbox1 != checked) { 
    checkbox1Error.textContent = "Veuillez vérifier que vous avez accepté les termes et conditions";
    checkbox1Error.style.color = "red";
    checkbox1Error.style.fontSize = "10px";
    checkbox1.style.borderColor = "red";
    checkbox1.style.borderWidth = "2px";
    return false;
  } else {
    checkbox1Error.style.display = "none";
    checkbox1.style = "default";
  };
}