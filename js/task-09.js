
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonElem = document.querySelector("button");
const spanContentElem = document.querySelector("span");

function changeColor(event) {
  const getRandomColor = getRandomHexColor();
  document.body.style.backgroundColor = getRandomColor;
  spanContentElem.textContent = getRandomColor;
}

buttonElem.addEventListener("click", changeColor);