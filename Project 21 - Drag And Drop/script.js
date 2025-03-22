const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
}

function dragStart() {
  console.log("drag start");
}
function dragEnd() {
  console.log("drag end");
}
function dragOver() {}
function dragEnter() {}
function dragLeave() {}
function dragDrop() {}
