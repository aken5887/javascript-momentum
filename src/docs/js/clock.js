const clock = document.querySelector("h2#clock");
/**
	interval & timeout
	setInterval({
		
	}, 5000);
*/
/*
	padStart
*/
function getClock(){
	const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	/*const secd = date.getSeconds() < 10?`0${date.getSeconds()}`:date.getSeconds();
	console.log(secd);*/
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);