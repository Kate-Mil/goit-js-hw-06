const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur (event) { 

    if (event.currentTarget.value.length > 0 && event.currentTarget.value.length <= inputRef.dataset.length){  
    inputRef.style.borderColor = "#4caf50";
    } else inputRef.style.borderColor = "#f44336";
   }

