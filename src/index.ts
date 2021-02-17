// Making navigation menu responsive

const menuBtn: Element = document.getElementsByClassName('menu-button')[0]
const navItems: Element = document.getElementsByClassName('topNavigation-items')[0]

menuBtn.addEventListener('click', () => {
    navItems.classList.toggle('active')
})

// Using fetch to get information from API

const htmlRoot: Element = document.querySelector(".root");
fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => buildComponent(data));

function buildComponent(data: any) {
    const peopleInSpace: any = data.people.length;
    const newHtml: string = `
    <h1 class ="about-text2">Want to know how many people are in space right now?</h1>
    <p class ="about-text"><strong><i>There are currently ${peopleInSpace} people in space.</i></strong></p>
  `
    htmlRoot.innerHTML = newHtml;
}

// Validating the contact form

// Selecting the form and adding an event listener
const contactForm: Element = document.querySelector("#contactForm");
contactForm.addEventListener("submit", validateContactForm);

// Checking the values that the user inputs, and displaying an error message if they don't meet the requirements
function validateContactForm() {
    this.preventDefault();
    console.log("The form was submitted");

    // First name
    const firstName: Element = document.querySelector("#firstName");
    const firstNameError: Element = document.querySelector("#firstNameError");
    const firstNameValue: string = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    };

    // Last name
    const lastName: Element = document.querySelector("#lastName");
    const lastNameError: Element = document.querySelector("#lastNameError");
    const lastNameValue: string = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    };

    // Email address:
    const email: Element = document.querySelector("#email");
    const emailError: Element = document.querySelector("#emailError");
    const invalidEmailError: Element = document.querySelector("#invalidEmailError");
    const emailValue: any = email.value;

    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };

    if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    };

    // Error message:
    const message: Element = document.querySelector("#message");
    const messageError: Element = document.querySelector("#messageError");
    const messageValue: string = message.value;

    if (checkInputLengthMessage(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    };
};

// Checking all the input values and using trim to make sure that the info is valid
function checkInputLength(value: any) {
    // Trim the value
    const trimmedValue = value.trim();

    // If the value's length is greater than 0 characters, return true
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
};

// Checking the length of the message, and making sure that it is equal to or more than ten characters
function checkInputLengthMessage(value: string) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is equal or greater than 10 characters, return true
    if (trimmedValue.length >= 10) {
        return true;
    } else {
        return false;
    }
};

// Checking that the email address is valid
function validateEmail(email: string) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};