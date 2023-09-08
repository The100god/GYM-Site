console.log('me js file hu');
let signUp = document.getElementById('signUp');
let logIn = document.getElementById('login');
let forgotPassword =  document.getElementById('forgotPassword');
let backToLoginPage =  document.getElementById('backToLoginPage');


signUp.addEventListener('click', ()=> {
    document.getElementById('signUpPage').style.display='block';
    document.getElementById('logInPage').style.display='none';
});

logIn.addEventListener('click', ()=> {
    document.getElementById('signUpPage').style.display='none';
    document.getElementById('logInPage').style.display='block';
});

forgotPassword.addEventListener('click', ()=> {
    document.getElementById('logInSignUpPage').style.display='none';
    document.getElementById('passwordResetPage').style.display='block';
});

backToLoginPage.addEventListener('click', ()=> {
    document.getElementById('logInSignUpPage').style.display='block';
    document.getElementById('passwordResetPage').style.display='none';
});

