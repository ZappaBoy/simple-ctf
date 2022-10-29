const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

const username = document.getElementById("username");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.uname.value;
    const password = loginForm.psw.value;

    console.log(username);
})