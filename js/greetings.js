const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginButton = document.querySelector("#login-button");
const greeting = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	if (username === "") {
		alert("Please write your name.");
		return;
	}
	localStorage.setItem("username", username);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}
