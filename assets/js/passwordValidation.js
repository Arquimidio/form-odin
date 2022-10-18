const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('pwd_confirmation');
const passwordMismatch = "Passwords don't match" 

function validatePassword(){
    const [ password, confirmedPassword ] = [
        passwordInput.value,
        confirmPasswordInput.value
    ]

    if (password !== confirmedPassword) {
        passwordInput.setCustomValidity(passwordMismatch)
        confirmPasswordInput.setCustomValidity(passwordMismatch)
    }else {
        passwordInput.setCustomValidity("")
        confirmPasswordInput.setCustomValidity("")
    }
}

[passwordInput, confirmPasswordInput].forEach(input => {
    input.addEventListener('blur', validatePassword)
})

