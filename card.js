
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const company = localStorage.getItem('company');
const jobTitle = localStorage.getItem('jobTitle');
const email = localStorage.getItem('email');
const phoneNumber = localStorage.getItem('phoneNumber');


document.getElementById('fullName1').innerText = `${firstName} ${lastName}`;
document.getElementById('company1').innerText = company;
document.getElementById('jobTitle1').innerText = jobTitle;
document.getElementById('email1').innerText = email;
document.getElementById('phoneNumber1').innerText = phoneNumber;

document.getElementById('fullName2').innerText = `${firstName} ${lastName}`;
document.getElementById('company2').innerText = company;
document.getElementById('jobTitle2').innerText = jobTitle;
document.getElementById('email2').innerText = email;
document.getElementById('phoneNumber2').innerText = phoneNumber;
