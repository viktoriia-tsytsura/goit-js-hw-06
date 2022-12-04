const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if (!email || !password) {
        alert("Всі поля повинні бути заповнені!")
    } else {
        const obj = {
            email,
            password,
        }
        console.log(obj)
    }

}