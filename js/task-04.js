const valueEl = document.querySelector('#value');

const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');
const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');
incrementBtnEl.addEventListener('click', onIncrementClick);
decrementBtnEl.addEventListener('click', onDecrementClick);

function onIncrementClick(event) {
    console.log('onclick')
    const currentValue = parseInt(valueEl.textContent);
    valueEl.textContent = currentValue + 1 
}

function onDecrementClick(event) {
    console.log('onclick')
    const currentValue = parseInt(valueEl.textContent);
    valueEl.textContent = currentValue - 1
}
