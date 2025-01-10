const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  const activePanel = document.querySelector(".panel.active");
  if (activePanel) {
    activePanel.classList.remove("active");
  }
}
