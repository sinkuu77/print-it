"use strict";

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dot = document.querySelectorAll(".dot");

const DOT_FILLED = "dot_selected";

let clicks = 0;

function slideControler(direction) {
  dot[clicks].classList.remove(DOT_FILLED);
  if (direction === "left") {
    if (clicks > 0) {
      clicks -= 1;
    } else {
      clicks = dot.length - 1;
    }
  } else {
    if (clicks < dot.length - 1) {
      clicks += 1;
    } else {
      clicks = 0;
    }
  }
  const chosenImg = slides[clicks].image;
  bannerImg.src = `./assets/images/slideshow/${chosenImg}`;
  const chosenTxt = slides[clicks].tagLine;
  tagLine.innerHTML = chosenTxt;
  dot[clicks].classList.add(DOT_FILLED);
}

arrowRight.addEventListener("click", () => slideControler("right"));
arrowLeft.addEventListener("click", () => slideControler("left"));
