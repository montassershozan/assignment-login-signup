var emailInput = document.querySelector('.emailinp');
var passwordInput = document.querySelector('.passwordinp');
var nameInput = document.querySelector('.nameinp');
var addusers = document.querySelector('#addusers');
var notval = document.querySelector('.notval');
var notval1 = document.querySelector('.notval1');


addusers.addEventListener('click', function (e) {
    e.preventDefault();
    adddatauser();
    clearForm();
})


var dataofusers = [];



function adddatauser() {

    var dataofuser = {
        nameInput: nameInput.value,
        emailInput: emailInput.value,
        passwordInput: passwordInput.value
    }

    if (validNameInput() && validEmailInput() && validPasswordInput() && nameInput.value !== '' && emailInput.value !== '' && emailInput.value !== '') {

        dataofusers.push(dataofuser);

        var convertarrtostr = JSON.stringify(dataofusers);
        localStorage.setItem('dataofusers', convertarrtostr);
        notval.innerHTML = `<strong class="text-success">success!!</strong>`;
        notval.classList.remove('d-none');
        window.location.href = 'index.html';

    } else {

        notval.innerHTML = `<strong class="text-danger">Enter Name Or Email Or Password with right way !!</strong>`;
        notval.classList.remove('d-none');
        notval1.classList.add('d-none');

    }

}

function clearForm() {

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}



function validNameInput() {

    var regexName = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;

    if (regexName.test(nameInput.value)) {
        notval1.classList.add('d-none');
        return true;
    } else {
        notval1.innerHTML = `<strong class="text-danger">Start with Cap Letter!!</strong>`
        notval1.classList.remove('d-none');
        return false;
    }

}

function validEmailInput() {

    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexEmail.test(emailInput.value)) {
        return true;
    } else {
        return false;
    }

}
function validPasswordInput() {

    var regexPassword = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;

    if (regexPassword.test(passwordInput.value)) {
        return true;
    } else {
        return false;
    }

}


nameInput.addEventListener('blur', validNameInput);
emailInput.addEventListener('blur', validEmailInput);
passwordInput.addEventListener('blur', validPasswordInput);