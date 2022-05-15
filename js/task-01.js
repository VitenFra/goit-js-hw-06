const categoryEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryEl.length}`);

[...categoryEl].forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});