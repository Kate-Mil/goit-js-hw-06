const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredients = ingredients => {
  return ingredients.map (ingredient => {
    const itemOfIngredients = document.createElement('li');
    itemOfIngredients.classList.add ('item');
    itemOfIngredients.textContent = ingredient;

    return itemOfIngredients;
  });
};

const navEl = document.querySelector('#ingredients');
const elements = makeIngredients(ingredients);
navEl.append (...elements);

