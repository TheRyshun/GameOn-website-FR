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
const closeModalBtn = document.querySelectorAll(".close");
const body = document.querySelector(".bground");
const closeValidateBtn = document.querySelectorAll(".close-btn");
const openvalidate = document.querySelector(".validate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
  openvalidate.style.display = "none";
  console.log("Display None");
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  console.log("Display Hidden");
}

const form = document.querySelector("form");

let LogPrenom;
let LogNom;
let LogEmail;
let LogDate;
let LogQtn;

///////////////////////////////

// Prénom //

const ValidatePrenom = () => {
  //Variable sur l'input Prénom
  const PrenomValue = document.getElementById("first").value;
  const errorPrenom = document.querySelector("#prenom-error");
  const borderPrenom = document.querySelector(".inpPrenom");

  // Quand il n'y a aucun caractère alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  if (PrenomValue === "") {
    borderPrenom.style.border = "0.8px outset red";
    errorPrenom.textContent = "Veuillez renseigner ce champ";
    return false;
  }

  // Si l’input n’a pas pas au dessus de 2 caractères alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  if (PrenomValue.length <= 1) {
    borderPrenom.style.border = "0.8px outset red";
    errorPrenom.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  // Si l'input à plus de deux caractères alors
  // aucune border et l'alerte disparait (texte)
  if (PrenomValue.length >= 2) {
    borderPrenom.style.border = "0.8px outset #ccc";
    errorPrenom.textContent = "";
    LogPrenom = PrenomValue;
    return true;
  }
};

form.addEventListener("input", ValidatePrenom);

///////////////////////////////

// Nom //

const ValidateNom = () => {
  //Variable sur l'input Nom
  const NomValue = document.getElementById("last").value;
  const errorNom = document.querySelector("#nom-error");
  const borderNom = document.querySelector(".inpNom");

  // Quand il n'y a aucun caractère alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  if (NomValue === "") {
    borderNom.style.border = "0.8px outset red";
    errorNom.textContent = "Veuillez renseigner ce champ";
    return false;
  }

  // Si l’input n’a pas pas au dessus de 2 caractères alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  if (NomValue.length <= 1) {
    borderNom.style.border = "0.8px outset red";
    errorNom.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }

  // Si l'input à plus de deux caractères alors
  // aucune border et l'alerte disparait (texte)
  if (NomValue.length >= 2) {
    borderNom.style.border = "0.8px outset #ccc";
    errorNom.textContent = "";
    LogNom = NomValue;
    return true;
  }
};

form.addEventListener("input", ValidateNom);

///////////////////////////////

// E-mail //

const ValidateEmail = () => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Variable sur l'input Email
  const EmailValue = document.getElementById("email").value;
  const errorEmail = document.querySelector("#email-error");
  const borderEmail = document.querySelector(".inpEmail");

  // Si l'input ne contient pas les strings de la variable "re" correctement alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  if (!email.value.match(re)) {
    borderEmail.style.border = "0.8px outset red";
    errorEmail.textContent = "Veuillez rentrer une adresse mail valide";
    return false;
  } else {
    // Sinon validation
    // aucune border et l'alerte disparait (texte)
    borderEmail.style.border = "0.8px outset #ccc";
    errorEmail.textContent = "";
    LogEmail = EmailValue;
    return true;
  }
};

form.addEventListener("input", ValidateEmail);

///////////////////////////////

// Date de naissance //

// Initialisation de la date de l'utilisateur pour ensuite soustraire 16 ans à la date
// Pour avoir la limite d'inscription
// Exemple > 2022-16 = 2006 alors toute au-dessus du résultat n'est pas autorisé
const getLimitYears = () => {
  const NowDate = new Date();
  NowDate.setFullYear(NowDate.getFullYear() - 16);
  const LimitYears = NowDate.getFullYear();
  return LimitYears;
};
const LimitYearsResult = getLimitYears();
let ValidateYears;

const ValidateDate = () => {
  //Variable sur l'input Date
  const DATE = document.getElementById("birthdate").value;
  const errorDATE = document.querySelector("#date-error");
  const borderDATE = document.querySelector(".inpDATE");

  // Quand il n'y a aucun caractère alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  if (DATE === "") {
    borderDATE.style.border = "0.8px outset red";
    errorDATE.textContent = "Vous devez entrer votre date de naissance";
    ValidateYears = false;
    return false;
  }
  // Compare la date getLimitYears avec la date de l'input
  // Si la variable de l'input est supérieur à la LimitYearsResult alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  else if (DATE.substr(0, 4) > LimitYearsResult) {
    borderDATE.style.border = "0.8px outset red";
    errorDATE.textContent =
      "Vous devez avoir au moins 16 ans pour pouvoir vous inscrire";
    ValidateYears = false;
    return false;
  }
  // Sinon validation
  // aucune border et l'alerte disparait (texte)
  borderDATE.style.border = "0.8px outset #ccc";
  errorDATE.textContent = "";
  ValidateYears = true;
  LogDate = DATE;
  return true;
};

form.addEventListener("input", ValidateDate);

///////////////////////////////

// Quantité //

const ValidateQTN = () => {
  //Variable sur l'input Quantité
  const QtnValue = document.getElementById("quantity").value;
  const errorQtn = document.querySelector("#qtn-error");
  const borderQtn = document.querySelector(".inpQtn");

  // Quand il n'y a aucun caractère alors
  // la border deviens rouge et un champ de texte apparaît pour signaler l’utilisateur.
  if (QtnValue === "") {
    borderQtn.style.border = "0.8px outset red";
    errorQtn.textContent = "Veuillez renseigner ce champ";
    return false;
  } else {
    // Sinon validation
    // aucune border et l'alerte disparait (texte)
    borderQtn.style.border = "0.8px outset #ccc";
    errorQtn.textContent = "";
    LogQtn = QtnValue;
    return true;
  }
};

form.addEventListener("input", ValidateQTN);

///////////////////////////////

// Localisations //

const ValidateLOC = () => {
  //Variable sur l'input Quantité
  let location = document.querySelectorAll('input[name="location"]');
  const errorLoc = document.querySelector("#loc-error");

  // Pour toutes les locations si une est checked alors aucun avertissement
  // Sinon une chaîne de caractères apparaît pour signaler l'utilisateur
  let LocIsChecked = false;
  for (i = 0; i < location.length; i++) {
    if (location[i].checked) {
      LocIsChecked = true;
    }
  }
  if (!LocIsChecked) {
    errorLoc.textContent = "Veuillez sélectionner une ville";
    return false;
  } else {
    errorLoc.textContent = "";
    return true;
  }
};

form.addEventListener("input", ValidateLOC);

///////////////////////////////

// Conditions d'utilisation //

const ValidateCOND = () => {
  //Variable sur l'input Conditions
  const conditions = document.querySelector(".conditions");
  const errorCond = document.querySelector("#cond-error");

  // Si la condition n'est pas check alors un avertissement apparaît
  if (!conditions.checked) {
    errorCond.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions";
    return false;
  } else {
    errorCond.textContent = "";
    return true;
  }
};

form.addEventListener("input", ValidateCOND);

///////////////////////////////

// Evenement //
let ValidateEvent;
form.addEventListener("change", function () {
  const event = document.querySelector(".event");

  if (!event.checked) {
    ValidateEvent = false;
  } else {
    ValidateEvent = true;
  }
});

///////////////////////////////

// Close Form //

closeValidateBtn.forEach((btn) => btn.addEventListener("click", closeValidate));

function closeValidate() {
  body.style.display = "none";
  openvalidate.style.display = "none";
}

const validateContent = () => {
  form.style.display = "none";
  openvalidate.style.display = "flex";
};

///////////////////////////////

// Soumettre //

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const CheckPrenom = ValidatePrenom();
  const CheckNom = ValidateNom();
  const CheckEmail = ValidateEmail();
  const CheckDate = ValidateDate();
  const CheckQTN = ValidateQTN();
  const CheckLOC = ValidateLOC();
  const CheckCOND = ValidateCOND();

  if (CheckPrenom && CheckNom && CheckEmail && CheckDate && CheckQTN && CheckLOC && CheckCOND) {
    
  console.log(
    "Prénom : " +
      LogPrenom +
      "\nNom : " +
      LogNom +
      "\nEmail : " +
      LogEmail +
      "\nDate : " +
      LogDate +
      "\nNumber T : " +
      LogQtn +
      "\nCondition : " +
      CheckCOND +
      "\nPub : " +
      ValidateEvent
  );
    validateContent();
  }
});
