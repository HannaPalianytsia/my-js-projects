const loadText = document.querySelector(".loading");
const background = document.querySelector(".background");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.textContent = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  background.style.filter = `blur(${30 - (load * 30) / 100}px)`;
}
