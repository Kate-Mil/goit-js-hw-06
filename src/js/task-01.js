const titleEl = document.querySelectorAll('h2');
const listItemsEl = document.querySelectorAll('.item ul');

const listOfAnimals = listItemsEl[0].children;
const listOfProducts = listItemsEl[1].children;
const listOfTechnologies = listItemsEl[2].children;




console.log('Number of categories:', titleEl.length);
console.log('Category:', titleEl[0].textContent);
console.log('Elements:', listOfAnimals.length);
console.log('Category:', titleEl[1].textContent);
console.log('Elements:', listOfProducts.length);
console.log('Category:', titleEl[2].textContent);
console.log('Elements:', listOfTechnologies.length);




