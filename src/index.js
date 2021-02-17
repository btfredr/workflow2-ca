// Making navigation menu responsive
var menuBtn = document.getElementsByClassName('menu-button')[0];
var navItems = document.getElementsByClassName('topNavigation-items')[0];
menuBtn.addEventListener('click', function () {
    navItems.classList.toggle('active');
});
// Using fetch to get information from API
var htmlRoot = document.querySelector(".root");
fetch("http://api.open-notify.org/astros.json")
    .then(function (response) { return response.json(); })
    .then(function (data) { return buildComponent(data); });
function buildComponent(data) {
    var peopleInSpace = data.people.length;
    var newHtml = "\n    <h1 class =\"about-text2\">Want to know how many people are in space right now?</h1>\n    <p class =\"about-text\"><strong><i>There are currently " + peopleInSpace + " people in space.</i></strong></p>\n  ";
    htmlRoot.innerHTML = newHtml;
}
// Validating the contact form
// Selecting the form and adding an event listener
var contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", validateContactForm);
// Checking the values that the user inputs, and displaying an error message if they don't meet the requirements
function validateContactForm() {
    this.preventDefault();
    console.log("The form was submitted");
    // First name
    var firstName = document.querySelector("#firstName");
    var firstNameError = document.querySelector("#firstNameError");
    var firstNameValue = firstName.value;
    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    ;
    // Last name
    var lastName = document.querySelector("#lastName");
    var lastNameError = document.querySelector("#lastNameError");
    var lastNameValue = lastName.value;
    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
    ;
    // Email address:
    var email = document.querySelector("#email");
    var emailError = document.querySelector("#emailError");
    var invalidEmailError = document.querySelector("#invalidEmailError");
    var emailValue = email.value;
    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    ;
    if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    }
    else {
        invalidEmailError.style.display = "block";
    }
    ;
    // Error message:
    var message = document.querySelector("#message");
    var messageError = document.querySelector("#messageError");
    var messageValue = message.value;
    if (checkInputLengthMessage(messageValue) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
    ;
}
;
// Checking all the input values and using trim to make sure that the info is valid
function checkInputLength(value) {
    // Trim the value
    var trimmedValue = value.trim();
    // If the value's length is greater than 0 characters, return true
    if (trimmedValue.length > 0) {
        return true;
    }
    else {
        return false;
    }
}
;
// Checking the length of the message, and making sure that it is equal to or more than ten characters
function checkInputLengthMessage(value) {
    // trim the value
    var trimmedValue = value.trim();
    // if the value's length is equal or greater than 10 characters, return true
    if (trimmedValue.length >= 10) {
        return true;
    }
    else {
        return false;
    }
}
;
// Checking that the email address is valid
function validateEmail(email) {
    var regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
;
