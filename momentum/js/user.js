const greeting = document.querySelector("#greeting");
const greetingTxt = document.querySelector("#greetingText");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input:first-child");
const logoutButton = document.querySelector("#logoutButton");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLogin(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    fillGreetings(userName);
}

function onLogout(event) {
    event.preventDefault();
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);

    fillGreetings("");
    greeting.classList.add(HIDDEN_CLASSNAME);
}

function fillGreetings(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greetingTxt.innerText = `Hello! ${userName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    fillGreetings(savedUserName);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLogin);
logoutButton.addEventListener("click", onLogout);
