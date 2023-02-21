
const titleEl = document.querySelector('#categories');
const listOfItems = titleEl.children;
const numberOfCategories = titleEl.children.length;

console.log('Number of categories:', numberOfCategories);
for (let i = 0; i < numberOfCategories ; i++) {
    console.log('Category:',listOfItems[i].firstElementChild.textContent);
    console.log('Elements:',listOfItems[i].lastElementChild.children.length);
}



