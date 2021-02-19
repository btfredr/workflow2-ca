// Making navigation menu responsive

const menuBtn = document.getElementsByClassName('menu-button')[0];
const navItems = document.getElementsByClassName('topNavigation-items')[0];

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
function validateContactForm(e: any) {
    e.preventDefault();
    console.log("The form was submitted");

    // First name
    const firstNameValue = (<HTMLInputElement>document.querySelector('#firstName')).value;

    if (checkInputLength(firstNameValue) === true) {
        (<HTMLElement>document.querySelector('#firstNameError')).style.display = 'none';
    } else {
        (<HTMLElement>document.querySelector('#firstNameError')).style.display = 'block';
    };

    // Last name
    const lastNameValue = (<HTMLInputElement>document.querySelector('#lastName')).value;

    if (checkInputLength(lastNameValue) === true) {
        (<HTMLElement>document.querySelector('#lastNameError')).style.display = 'none';
    } else {
        (<HTMLElement>document.querySelector('#lastNameError')).style.display = 'block';
    };

    // Email address:
    const emailValue = (<HTMLInputElement>document.querySelector('#email')).value;

    if (checkInputLength(emailValue) === true) {
        (<HTMLElement>document.querySelector('#emailError')).style.display = 'none';
    } else {
        (<HTMLElement>document.querySelector('#emailError')).style.display = 'block';
    };

    if (validateEmail(emailValue) === true) {
        (<HTMLElement>document.querySelector('#invalidEmailError')).style.display = 'none';
    } else {
        (<HTMLElement>document.querySelector('#invalidEmailError')).style.display = 'block';
    };

    // Error message:
    const messageValue = (<HTMLInputElement>document.querySelector('#message')).value;

    if (checkInputLengthMessage(messageValue) === true) {
        (<HTMLElement>document.querySelector('#messageError')).style.display = 'none';
    } else {
        (<HTMLElement>document.querySelector('#messageError')).style.display = 'block';
    };
};

// Checking all the input values and using trim to make sure that the info is valid
export function checkInputLength(value: string) {
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
export function checkInputLengthMessage(value: string) {
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
    const regEx: RegExp = /\S+@\S+\.\S+/;
    return regEx.test(email);
};