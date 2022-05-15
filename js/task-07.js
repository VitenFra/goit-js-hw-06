const inputRefs = document.querySelector("#font-size-control");
const textRefs = document.querySelector("#text");

inputRefs.addEventListener("input", () => {
  textRefs.style.fontSize = inputRefs.value + "px";
});