const open = document.getElementById("open");
const close = document.getElementById("close");
const links = document.querySelectorAll("a");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

links.forEach((link) =>
  link.addEventListener("click", () => container.classList.remove("show-nav"))
);
