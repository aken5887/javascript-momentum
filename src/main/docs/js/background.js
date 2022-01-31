const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpeg",
	"9.jpg"
];
/**
	createElement
	appendChild
 */
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.width = 1024;
bgImage.height = 768;

document.body.appendChild(bgImage);