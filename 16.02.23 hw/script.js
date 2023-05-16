function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    let errorLabel = document.getElementsByClassName("err");

    let isValid = true;

    if (usernameInput.value.length < 3 || usernameInput.value.length > 15) {
        usernameInput.classList.add('error');
        errorLabel[0].innerHTML = "Username must be between 3 and 15 characters";
        isValid = false;
    } else {
        usernameInput.classList.remove('error');
        errorLabel[0].innerHTML = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        errorLabel[1].innerHTML = "Email is not valid";
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        errorLabel[1].innerHTML = "";
    }

    if (passwordInput.value.length > 9) {
        passwordInput.classList.add('error');
        errorLabel[2].innerHTML = "Password must be less than 9 characters";
        isValid = false;
    } else {
        passwordInput.classList.remove('error');
        errorLabel[2].innerHTML = "";
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.classList.add('error');
        errorLabel[3].innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordInput.classList.remove('error');
        errorLabel[3].innerHTML = "";
    }

    return isValid;
}

function handleSubmit(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    event.preventDefault();

    if (!validateForm()) {
        return;
    }

}