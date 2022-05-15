const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

counterValue.textContent = 0;

buttonDec.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

buttonInc.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});