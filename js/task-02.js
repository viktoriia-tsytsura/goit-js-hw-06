const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemsEl = ingredients.map(item => {
  const liEl = document.createElement('li');
  liEl.textContent = item;
  liEl.classList.add('item');

  return liEl;
})
const ulEl = document.querySelector('#ingredients');
ulEl.append(...itemsEl)
