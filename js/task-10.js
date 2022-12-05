function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('button[data-create]');
createBtnEl.addEventListener('click', onCreateClick);

const destroyBtnEl = document.querySelector('button[data-destroy]');
destroyBtnEl.addEventListener('click', onDestroyClick);

const valueEl = document.querySelector('#controls input');

const containerEl = document.querySelector('#boxes');

function onCreateClick(event) {
  const currentValue = valueEl.value;

  containerEl.append(...createBoxes(currentValue))
  
}

function onDestroyClick(event) {
  containerEl.innerHTML = '';
  valueEl.value = '';
}


function createBoxes(amount) {
  const boxesEl = [];
  let currentWidth = 30;
  let currentHeight = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div')
    boxEl.style.backgroundColor = getRandomHexColor();
    
    boxEl.style.width = `${currentWidth}px`
    boxEl.style.height = `${currentHeight}px`;
  
    currentWidth += 10;
    currentHeight += 10;

    boxesEl.push(boxEl);
  }
  
  return boxesEl;
}