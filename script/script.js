const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

function handleFirstName() {
    if (firstName.value) {
        firstName.value = "";
        firstName.style.border = "1px solid hsl(246, 25%, 77%)";
        return true;
    } else {
        document.getElementById("first-name-err-icon").style.display = "block";
        document.getElementById("first-name-err-message").style.display =
            "block";
        firstName.style.border = "1px solid red";
        return false;
    }
}

function handleLastName() {
    if (lastName.value) {
        lastName.value = "";
        lastName.style.border = "1px solid hsl(246, 25%, 77%)";
        return true;
    } else {
        document.getElementById("last-name-err-icon").style.display = "block";
        document.getElementById("last-name-err-message").style.display =
            "block";
        lastName.style.border = "1px solid red";
        return false;
    }
}

/* validate an e-mail address by leveraging the HTML5
   input element with type "email"
*/
function validateEmail() {
    let input = document.createElement("input");
    input.type = "email";
    input.value = email.value;

    if (input.checkValidity() && input.value !== "") {
        email.value = "";
        email.style.border = "1px solid hsl(246, 25%, 77%)";
        return true;
    } else {
        document.getElementById("email-err-icon").style.display = "block";
        document.getElementById("email-err-message").style.display = "block";
        email.style.border = "1px solid red";
        return false;
    }
}

function handlePassword() {
    if (password.value) {
        password.value = "";
        password.style.border = "1px solid hsl(246, 25%, 77%)";
        return true;
    } else {
        document.getElementById("password-err-icon").style.display = "block";
        document.getElementById("password-err-message").style.display = "block";
        password.style.border = "1px solid red";
        return false;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstNameResult = handleFirstName();
    let lastNameResult = handleLastName();
    let emailResult = validateEmail();
    let passwordResult = handlePassword();

    if (firstNameResult && lastNameResult && emailResult && passwordResult) {
        console.log("Register success");
    } else {
        console.log("Register failed");
    }
});

firstName.addEventListener("focus", function () {
    firstName.style.border = "1px solid hsl(248, 32%, 49%)";
    document.getElementById("first-name-err-icon").style.display = "none";
    document.getElementById("first-name-err-message").style.display = "none";
});
firstName.addEventListener("focusout", function () {
    firstName.style.border = "1px solid hsl(246, 25%, 77%)";
});

lastName.addEventListener("focus", function () {
    lastName.style.border = "1px solid hsl(248, 32%, 49%)";
    document.getElementById("last-name-err-icon").style.display = "none";
    document.getElementById("last-name-err-message").style.display = "none";
});
lastName.addEventListener("focusout", function () {
    lastName.style.border = "1px solid hsl(246, 25%, 77%)";
});

email.addEventListener("focus", function () {
    email.style.border = "1px solid hsl(248, 32%, 49%)";
    document.getElementById("email-err-icon").style.display = "none";
    document.getElementById("email-err-message").style.display = "none";
});
email.addEventListener("focusout", function () {
    email.style.border = "1px solid hsl(246, 25%, 77%)";
});

password.addEventListener("focus", function () {
    password.style.border = "1px solid hsl(248, 32%, 49%)";
    document.getElementById("password-err-icon").style.display = "none";
    document.getElementById("password-err-message").style.display = "none";
});
password.addEventListener("focusout", function () {
    password.style.border = "1px solid hsl(246, 25%, 77%)";
});
