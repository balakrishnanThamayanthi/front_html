const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e)=>{
    
    if (!validateInputs()){
        e.preventDefault();

    }
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success =true

    if(usernameVal===''){
        success=false;
        setError(username, 'username is required')
    }
    else{
        setSuccess(username)
    }


    // if (emailVal===''){
    //     success=false;
    //     setError(email,'Email is required')
    // }
    // else if (!validateEmail(emailVal)){
    //     success=false;
    //     setError(password, 'Please enter a valid email')
    // } 
    // else{
    //     setSuccess(email)
    // }


    if(passwordVal===''){
        success=false;
        setError(password,'Password is required')
    }
    else if(password.length<8){
        success=false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success=false;
        setError(cpassword,'Confirm Password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success=false;
        setError(cpassword,'Passsword does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;
     
}

function setError(element,massage){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = massage;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}