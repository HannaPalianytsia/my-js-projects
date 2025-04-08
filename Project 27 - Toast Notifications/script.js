const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  { message: "Error", color: "red" },
  { message: "Warning", color: "orange" },
  { message: "Information", color: "blue" },
  { message: "Success", color: "green" },
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  const message = getRandomMessage();
  notif.style.color = message.color;
  notif.innerText = message.message;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
