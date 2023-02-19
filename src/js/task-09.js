const refs = {
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
};

refs.btn.addEventListener('click', onClickChangeBtnColor);

function onClickChangeBtnColor (event){
  const colorName = getRandomHexColor();
  refs.body.style.backgroundColor = colorName;
  refs.color.textContent = colorName;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

