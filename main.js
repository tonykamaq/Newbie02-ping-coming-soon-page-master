let inputEmail = document.getElementById('email');
// console.log(inputEmail);
let button = document.getElementById('button');

button.addEventListener('click',(event)=>{
    event.preventDefault();
    // event.preventDefault para que no desaparesca el primer evento click
    validateEmail(inputEmail.value)
});

function validateEmail(email){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(expReg.test(email) == true){
        inputEmail.style.border = "1px solid var(--PaleBlue)";
        error.style.visibility = "hidden";
        inputEmail.value="";
    }else{
        inputEmail.style.border = "1px solid red";
        error.style.visibility = "visible";
    }
}