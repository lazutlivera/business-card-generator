
const form = document.getElementById('card');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const companyInput = document.getElementById('company');
const jobTitleInput = document.getElementById('jobTitle');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

firstNameInput.addEventListener('blur', validateFirstName);
lastNameInput.addEventListener('blur', validateLastName);
emailInput.addEventListener('blur', validateEmail);
phoneNumberInput.addEventListener('blur', validatePhoneNumber);


form.addEventListener('submit', handleSubmit);


function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(firstName)) {
        firstNameError.innerText = 'First name should contain only letters.';
        firstNameInput.classList.add('invalid');
        return false;
    } else {
        firstNameError.innerText = '';
        firstNameInput.classList.remove('invalid');
        return true;
    }
}


function validateLastName() {
    const lastName = lastNameInput.value.trim();
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(lastName)) {
        lastNameError.innerText = 'Last name should contain only letters.';
        lastNameInput.classList.add('invalid');
        return false;
    } else {
        lastNameError.innerText = '';
        lastNameInput.classList.remove('invalid');
        return true;
    }
}


function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.innerText = 'Please enter a valid email address.';
        emailInput.classList.add('invalid');
        return false;
    } else {
        emailError.innerText = '';
        emailInput.classList.remove('invalid');
        return true;
    }
}


function validatePhoneNumber() {
    const phoneNumber = phoneNumberInput.value.trim();
    const phoneRegex = /^[0-9]+$/;

    if (!phoneRegex.test(phoneNumber)) {
        phoneError.innerText = 'Phone number should contain only digits.';
        phoneNumberInput.classList.add('invalid');
        return false;
    } else {
        phoneError.innerText = '';
        phoneNumberInput.classList.remove('invalid');
        return true;
    }
}


function handleSubmit(event) {
    event.preventDefault(); 


    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPhoneNumberValid = validatePhoneNumber();

  
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneNumberValid) {
    
        localStorage.setItem('firstName', firstNameInput.value.trim());
        localStorage.setItem('lastName', lastNameInput.value.trim());
        localStorage.setItem('company', companyInput.value.trim());
        localStorage.setItem('jobTitle', jobTitleInput.value.trim());
        localStorage.setItem('email', emailInput.value.trim());
        localStorage.setItem('phoneNumber', phoneNumberInput.value.trim());


        window.location.href = 'card.html';
    }
}
