const canvas = document.getElementById("canvas");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorInput = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 4;
let color = "black";
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSize() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 1;
  if (size > 20) {
    size = 20;
  }
  updateSize();
});
decreaseBtn.addEventListener("click", () => {
  size -= 1;
  if (size < 1) {
    size = 1;
  }
  updateSize();
});

colorInput.addEventListener("change", (e) => (color = e.target.value));

clearBtn.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
