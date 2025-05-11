const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  const newHtml = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${50 * idx}ms">${letter}</span>`
    )
    .join("");
  label.innerHTML = newHtml;
});
