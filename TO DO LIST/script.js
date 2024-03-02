document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var loginResult = document.getElementById("loginResult");

    usernameError.textContent = "";
    passwordError.textContent = "";
    loginResult.textContent = "";

    if (!username) {
        usernameError.textContent = "Please enter your username";
        return;
    }

    if (!password) {
        passwordError.textContent = "Please enter your password";
        return;
    }

    // Here you would typically send the username and password to a server for authentication
    // For this example, let's just assume the username is "user" and password is "password"
    if (username === "user" && password === "password") {
        loginResult.textContent = "Login successful!";
    } else {
        loginResult.textContent = "Invalid username or password";
    }
});

	//Validtion Code For Inputs

    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];
    
    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');
    
    email.addEventListener('textInput', email_Verify);
    password.addEventListener('textInput', pass_Verify);
    
    function validated(){
        if (email.value.length < 9) {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
        }
        if (password.value.length < 6) {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            return false;
        }
    
    }
    function email_Verify(){
        if (email.value.length >= 8) {
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 5) {
            password.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
    }