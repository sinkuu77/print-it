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

//le bullet point
const banner = document.getElementById("banner");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dot = document.querySelectorAll(".dot");

// le bullet point actif au suivant
let clicks = 0;

function rightControler() {
	if(clicks < dot.length -1) {
		dot[clicks].classList.remove("dot_selected");
		clicks += 1;
		//changer l'images par l'actif au suivant
		const chosenImg = slides[clicks].image;
		bannerImg.src = `./assets/images/slideshow/${chosenImg}`;
		//changer le tagLine par l'actif au suivant
		const chosenTxt = slides[clicks].tagLine;
		tagLine.innerHTML = chosenTxt;
		dot[clicks].classList.add("dot_selected");
	} else {
		clicks = dot.length - 1;
		dot[clicks].classList.remove("dot_selected");
		clicks = 0;
		const chosenImg = slides[clicks].image;
		bannerImg.src = `./assets/images/slideshow/${chosenImg}`;
		const chosenTxt = slides[clicks].tagLine;
		tagLine.innerHTML = chosenTxt;
		dot[clicks].classList.add("dot_selected");}
}

// le bullet point actif au précédent
function leftControler() {
	dot[clicks].classList.remove("dot_selected");
	dot[clicks-1].classList.add("dot_selected");
	clicks = clicks - 1;
	const chosenImg = slides[clicks].image;
	bannerImg.src = `./assets/images/slideshow/${chosenImg}`;
	const chosenTxt = slides[clicks].tagLine;
	tagLine.innerHTML = chosenTxt;
}


arrowRight.addEventListener("click", rightControler);
arrowLeft.addEventListener("click", leftControler);



