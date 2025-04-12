const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

// console.log(rightSlide);
// console.log(slidesLength);

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}%`;

downButton.addEventListener("click", () => changeSlide());
upButton.addEventListener("click", () => changeSlide());

function changeSlide() {
  console.log("slide changed");
}
