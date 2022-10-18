const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('pwd_confirmation');
const passwordMismatch = "⚠ Passwords don't match!" 
const confirmationStatus = document.getElementById('confirmation_status')

function setAsValid(){
    passwordInput.setCustomValidity("")
    confirmPasswordInput.setCustomValidity("")
    confirmationStatus.textContent = ""
}

function setAsInvalid(){
    passwordInput.setCustomValidity(passwordMismatch)
    confirmPasswordInput.setCustomValidity(passwordMismatch)
    confirmationStatus.textContent = passwordMismatch
    confirmationStatus.style.color = "var(--meta-red)"
}


function validatePassword(){
    const [ password, confirmedPassword ] = [
        passwordInput.value,
        confirmPasswordInput.value
    ]

    if (password !== confirmedPassword) {
        setAsInvalid()
    }else {
        setAsValid()
    }
}

[passwordInput, confirmPasswordInput].forEach(input => {
    input.addEventListener('blur', validatePassword)
    input.addEventListener('input', () => (
        passwordInput.value === confirmPasswordInput.value? setAsValid() : null
    ))
})

