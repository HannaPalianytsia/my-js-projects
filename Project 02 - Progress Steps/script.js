const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let activeCircle = 1;

nextBtn.addEventListener("click", () => {
  activeCircle++;

  if (activeCircle > circles.length) {
    activeCircle = circles.length;
  }
  update();
});

prevBtn.addEventListener("click", () => {
  activeCircle--;

  if (activeCircle < 1) {
    activeCircle = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < activeCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".circle.active");
  progress.style.width =
    (100 * (actives.length - 1)) / (circles.length - 1) + "%";

  if (activeCircle === 1) {
    prevBtn.disabled = true;
  } else if (activeCircle === circles.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
