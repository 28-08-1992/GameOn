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
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closemodal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// fonction pour ferme la modele
function closemodal() {
  modalbg.style.display = "none";
}
// DOM element des champs
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const allLocation = document.getElementById("allLocation");
const locations = document.querySelectorAll("#allLocation .checkbox-input");
const condition = document.getElementById("checkbox1");
const form = document.getElementById("form");
const regName = /^[a-zA-Z]{2,}$/;
const regEmail = /^[\w-\.]+@([a-zA-Z-]+\.)+[a-zA-Z]{2,4}$/;
const regBirthdate =
  /^\d{4}(-)(((0)[1-9])|((1)[0-2]))(-)([1-2][0-9]|(3)[0-1]|(0)[1-9])$/;

//-----------fonction generique pour prenom , nom , email -------

function checkFirstName() {
   
  if (firstname.value.trim() === "" || !firstname.value.match(regName)) {
    firstname.parentElement.setAttribute("data-error-visible", true);
    firstname.style.border = "3px solid #e544858";
    return false;
  } else {
    firstname.parentElement.setAttribute("data-error-visible", false);
    firstname.style.border = "3px solid #279e7a";
    return true;
  }
  
}
function checkLastName() {
  if (lastname.value.trim() === "" || !lastname.value.match(regName)) {
    lastname.parentElement.setAttribute("data-error-visible", true);
    lastname.style.border = "3px solid #e544858";
    return false;
  } else {
    lastname.parentElement.setAttribute("data-error-visible", false);
    lastname.style.border = "3px solid #279e7a";
    return true;
  }
}
function checkEmail() {
  if (email.value.trim() === "" || !email.value.match(regEmail)) {
    email.parentElement.setAttribute("data-error-visible", true);
    email.style.border = "3px solid #e544858";
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", false);
    email.style.border = "3px solid #279e7a";
    return true;
  }
}

function checkBirthDate() {
 
  if (birthDate.value.trim() === "" || !birthDate.value.match(regBirthdate)) {
    birthDate.parentElement.setAttribute("data-error-visible", true);
    birthDate.style.border = "3px solid #e544858";
    return false;
  } else {
    birthDate.parentElement.setAttribute("data-error-visible", false);
    birthDate.style.border = "3px solid #279e7a";
    return true;
  }
}
function checkQuantity() {
  if (
    quantity.value.trim() === "" ||
    parseInt(quantity.value.trim()) < 0 ||
    parseInt(quantity.value.trim()) > 99
  ) {
    quantity.parentElement.setAttribute("data-error-visible", true);
    quantity.style.border = "3px solid #e544858";
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", false);
    quantity.style.border = "3px solid #279e7a";
    return true;
  }
}
function checkLocation() {
  allLocation.setAttribute("data-error-visible", true);
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocation.setAttribute("data-error-visible", false);
      return true;
    }
  }
  return false;
}
function checkCondition() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", true);
    return false;
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
}

//add event lisner
firstname.addEventListener("change", checkFirstName);

lastname.addEventListener("change", checkLastName);

email.addEventListener("change", checkEmail);

birthDate.addEventListener("change", checkBirthDate);

quantity.addEventListener("change", checkQuantity);

allLocation.addEventListener("change", checkLocation);

condition.addEventListener("change", checkCondition);

//----------submit form-------------

const confirmation = document.getElementsByClassName("confirmation_submit");
const btnSubmit = document.getElementsByClassName("btn-submit");

function formValidation() {
  if (
    checkFirstName() === true &&
    checkLastName() === true &&
    checkEmail() === true &&
    checkBirthDate() === true &&
    checkQuantity() === true &&
    checkLocation() === true &&
    checkCondition() === true
  ) {
    return true;
  } else {
    return false;
  }
}
function feildValidation() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthDate();
  checkQuantity();
  checkLocation();
  checkCondition();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (formValidation() === true) {
    confirmationSubmit();
    resetForm();
  } else {
    
    alert("Merci de bien remplir les champs du formulaire.");
    feildValidation();
  }
});

//-------------reset form------------------
const resetForm = () => {
  document.querySelector('#form').reset();
};


function confirmationSubmit() {
  modalbg.style.display = "none";
  confirmation[0].style.display = "flex";
  
}

//---------close message de remerciement---------

const closeMessage = document.querySelector(".confirmation_submit .close");

function closeOK() {
  confirmation[0].style.display = "none";
}

close_btn_confirmation.addEventListener("click", closeOK);


closeMessage.addEventListener("click", closeOK);


