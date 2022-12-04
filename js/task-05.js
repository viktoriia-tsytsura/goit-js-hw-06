const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInput) 
const textEl = document.querySelector('#name-output')

function onInput(event) {
    if (!inputEl.value) {
         textEl.textContent = 'Anonymous'
    } else {
        textEl.textContent = inputEl.value
    }
}