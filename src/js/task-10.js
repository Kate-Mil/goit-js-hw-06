
const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  placeOfCreation: document.querySelector('#boxes'),
}


refs.createBtn.addEventListener('click', onClickchange);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onClickchange (event){
  const allBoxes = createBoxes(refs.input.value);
  refs.placeOfCreation.append (...allBoxes);
}

function createBoxes(amount){

  const boxes = [];
  for (let i = 0; i < amount; i+=1) {
  const box = document.createElement('div');
  box.style.width = `${30+10*i}px`;
  box.style.height = `${30+10*i}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxes.push(box);
  }
  return boxes;
}

function destroyBoxes() {
  refs.placeOfCreation.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

