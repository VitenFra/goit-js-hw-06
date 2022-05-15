const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsElements = document.querySelector("#ingredients");

const makeItem = (ingredient) => {
  return ingredient.map((element) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = element;
    itemElement.classList.add("item");

    return itemElement;
  });
};

const ingredient = makeItem(ingredients);
ingredientsElements.append(...ingredient);