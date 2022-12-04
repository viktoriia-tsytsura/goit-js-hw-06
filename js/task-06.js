const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlur)
const requiredNumberofSymbols = parseInt(inputEl.dataset.length)


function onBlur(event) {
    if (inputEl.value.length === requiredNumberofSymbols) {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid')
        }
        inputEl.classList.add('valid')
    } else {
         if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid')
         }
        inputEl.classList.add('invalid')
    }
}