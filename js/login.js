const loginForm = document.querySelector(".login-form");
const loginTextArea = loginForm.querySelector(".login-form-input");
const logoutForm = document.querySelector(".logout-form");
const logoutText = document.querySelector(".logout-form-output");
const HIDDEN_CLASS = "hidden";
const LOGIN_VALUE = "loginValue";

function loginFormHandler(event) {
    event.preventDefault();
    const loginValue = loginTextArea.value;
    localStorage.setItem(LOGIN_VALUE, loginValue);
    loadUserName(loginValue);
}
function loadUserName(loginValue) {
    logoutText.innerHTML = `Welcome ${loginValue}`;
    hiddenClassHandler();
}
function logoutFormHandler(event) {
    event.preventDefault();
    loginTextArea.value = "";
    localStorage.removeItem(LOGIN_VALUE);
    hiddenClassHandler();
}

function hiddenClassHandler() {
    if (logoutForm.classList.contains(HIDDEN_CLASS)) {
        logoutForm.classList.remove(HIDDEN_CLASS);
        loginForm.classList.add(HIDDEN_CLASS);
    } else if (loginForm.classList.contains(HIDDEN_CLASS)) {
        loginForm.classList.remove(HIDDEN_CLASS);
        logoutForm.classList.add(HIDDEN_CLASS);
    }
}
const getLoginValue = localStorage.getItem(LOGIN_VALUE);

if (getLoginValue !== null) {
    loadUserName(getLoginValue);
}
loginForm.addEventListener("submit", loginFormHandler);
logoutForm.addEventListener("submit", logoutFormHandler);