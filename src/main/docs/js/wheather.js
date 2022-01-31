/**
	api : how to communicate with each serverss
	api.openweathermap.org/data/2.5/weather?lat=35&lon=129&appid=s
	62c6c424cde91c653ba307caeff0551f
	86182e8505cd9144e9f9a7c6e39a2fa6
 */
const API_KEY = "62c6c424cde91c653ba307caeff0551f";

function onGeoSuccess(position){
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	console.log(lat, lng);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json())
			  .then(data => {
				console.log(data);
				//const weather = document.querySelector("#weather span:first-child");
				//const city =document.querySelector("#weather span:last-child");
				
				const spans = document.querySelectorAll("#weather span");
				spans[0].innerText = `${data.weather[0].main}/${data.main.temp}`;
				spans[1].innerText = data.name;
				
	});
	
}

function onGeoError(){
	console.log("Can't find you, No wheater for you.'");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

