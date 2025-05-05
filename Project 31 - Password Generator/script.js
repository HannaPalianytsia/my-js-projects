const resultEl = document.getElementById("result");
const clipboardEl = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
});

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]<>-+=,./;:";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

//https://www.w3schools.com/charsets/ref_html_ascii.asp
