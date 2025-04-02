const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML =
    "<img src='https://images.unsplash.com/photo-1741936428950-3f66f0a69320?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Picture of Polar Lights'/>";
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nulla.";
  profile_img.innerHTML =
    "<img src='https://randomuser.me/api/portraits/women/63.jpg' alt='Mary Green'/>";
  name.innerHTML = "Mary Green";
  date.innerHTML = "Oct 01, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bgt) => bgt.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2000);
