function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorBtnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
colorBtnEl.addEventListener('click', onClick);

function onClick(event) {
  const newColor = getRandomHexColor();
  colorEl.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}