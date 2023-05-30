const API_KEY = "acbebc54d5bf951745cd320c15e5c04a";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)} °C, `;
			city.innerText = `${data.name}`;
			const srcImage = `https://source.unsplash.com/1600x900/?${data.weather[0].main}`;
			document.querySelector("body").style.backgroundImage = `url(${srcImage})`;
		});
}

function onGeoError() {
	const srcImage = `https://source.unsplash.com/1600x900/?cat`;
			document.querySelector("body").style.backgroundImage = `url(${srcImage})`;

	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
