const refs = {
    input: document.querySelector('#font-size-control'),
    message: document.querySelector('#text'),
};

refs.input.addEventListener('input', toInputFontSizeChenge);

function toInputFontSizeChenge (event) {
refs.message.style.fontSize = event.currentTarget.value +'px';
}