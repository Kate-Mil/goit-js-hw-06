const refs = {
    form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit (event) {

    event.currentTarget.email.value === '' || event.currentTarget.password.value === '' ?
    alert('всі поля повинні бути заповнені') : event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
     console.log("name", name);
     console.log("value", value);
    });

    refs.form.reset();
};



