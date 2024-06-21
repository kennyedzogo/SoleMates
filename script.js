const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
const adminForm=document.getElementById('Admin');
const payButton=document.getElementById('payButton');
const adminButton=document.getElementById('adminButton');
const username = documwnt.getElementById('usename').value;
const pass = document.getElementById('password').value;

/*form.addEventListener('submit', function()){
    const allowedUsername = "Admin@Sole.Stores";
    const allowedPassword = "SoleMates@2018";

    if(username==allowedUsername && pass == allowedPassword){
        window.location.href="homepage.php";
    }else{
        //show error message
    }
}
*/
signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
adminButton.addEventListener('click',function(){
    adminForm.style.display='block';
    signInForm.style.display="none";
    signUpForm.style.display="none";
})
