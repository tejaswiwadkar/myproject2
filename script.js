let signUp=document.querySelector('.signupbtn');
let signIn=document.querySelector('.signinbtn');
let nameField=document.querySelector('.namefield');
let title=document.querySelector('.title');
let underline=document.querySelector('.underline');
let forgetPwd = document.querySelector(' form p');
let signUpForm = document.getElementById('signupform');
let forgetPasswordForm = document.getElementById('forgetPasswordForm');
let forgetPasswordLink = document.getElementById('forgetPasswordLink');
let returnToSignupLink = document.getElementById('returnToSignupLink');

signIn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML='Sign In';
    signUp.classList.add('disable');
    signIn.classList.remove('disable');
    underline.style.transform='translateX(40px)';
    forgetPwd.style.display = 'none';
})

signUp.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML='Sign Up';
    signUp.classList.remove('disable');
    signIn.classList.add('disable'); 
    underline.style.transform='translateX(0)';
    forgetPwd.style.display ='block';
})

forgetPasswordLink.addEventListener('click', () => {
    signUpForm.style.display = 'none';
    forgetPasswordForm.style.display = 'block';
    title.innerHTML='Forget Password';
    underline.style.transform='translateX(-50px)';
});

returnToSignupLink.addEventListener('click', () => {
    signUpForm.style.display = 'block';
    forgetPasswordForm.style.display = 'none';
    underline.style.transform='translateX(0)';
    title.innerHTML='Sign Up';

});