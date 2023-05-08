const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dot = document.querySelectorAll(".dot");



// le bullet point actif au suivant
let clicks = 0;

function rightControler() {
	if(clicks < dot.length -1) {
		dot[clicks].classList.remove("dot_selected");
		clicks += 1;
		dot[clicks].classList.add("dot_selected");
	} else {
		dot[3].classList.remove("dot_selected");
		clicks = 0;
		dot[clicks].classList.add("dot_selected");}
}

function leftControler(event) {
	console.log(event);
}


arrowRight.addEventListener("click", rightControler);
arrowLeft.addEventListener("click", leftControler);