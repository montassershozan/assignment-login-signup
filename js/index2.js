var emailInput2 = document.querySelector('#emailuser');
var passwordInput2 = document.querySelector('#passworduser');
var logingo = document.querySelector('#logingo');
var notvall = document.querySelector('.notvall');

var inxc = 0;


var dataofuserses = [];
var getdatauser = localStorage.getItem('dataofusers')
var convertstrtoarr = JSON.parse(getdatauser);

if(convertstrtoarr !== null ){
   dataofuserses = convertstrtoarr;
}
logingo.addEventListener('click' , function(e){
    e.preventDefault();
    logInUsers();
    clearForm();
});

function logInUsers() {
    for(var i = 0 ; i < dataofuserses.length ; i++){
    if(emailInput2.value == dataofuserses[i].emailInput && passwordInput2.value == dataofuserses[i].passwordInput){
        localStorage.setItem('logs' , inxc);
        window.location.href = "index2.html";
        notvall.innerHTML =`<strong class="text-success">success!!</strong>`;
        notvall.classList.remove('d-none');
    }else{
        
        notvall.innerHTML =`<strong class="text-danger">Enter Name Or Email Or Password with right way !!</strong>`;
        notvall.classList.remove('d-none');
    }
}
}

function clearForm() {

    emailInput2.value = "";
    passwordInput2.value = "";
}
