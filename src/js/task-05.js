const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value);
    event.currentTarget.value === '' ? refs.output.textContent = 'Anonymous' : refs.output.textContent = event.currentTarget.value;
}
