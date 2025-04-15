const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

downButton.addEventListener("click", () => changeSlide(-1));
upButton.addEventListener("click", () => changeSlide(1));

function changeSlide(moveSlide) {
  const sliderHeight = sliderContainer.clientHeight;

  activeSlideIndex += moveSlide;

  if (activeSlideIndex >= slidesLength) {
    activeSlideIndex = 0;
  } else if (activeSlideIndex < 0) {
    activeSlideIndex = slidesLength - 1;
  }

  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;

  // leftSlide.style.top = `-${(slidesLength - 1 - activeSlideIndex) * 100}%`;
  // rightSlide.style.top = `-${activeSlideIndex * 100}%`;
}
