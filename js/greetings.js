const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginButton = document.querySelector("#login-button");
const greeting = document.querySelector("#greetings");
const logoutButton = document.querySelector("#logout-button");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	if (username.trim() === "") {
		alert("Please write your name.");
		return;
	}
	localStorage.setItem("username", username.trim());
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = `Greetings, ${username}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	logoutButton.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem("username");

logoutButton.addEventListener("click", () => {
		localStorage.removeItem("username");
		location.reload();
});
	
if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	
	paintGreetings(savedUsername);
}
