const ulEl = document.querySelector('#categories');
const itemsEl = ulEl.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length);

itemsEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    console.log('Category:', titleEl.textContent);

    const innerUlEl = item.querySelector('ul');
    const innerItemsEl = innerUlEl.querySelectorAll('li');
    console.log('Elements:', innerItemsEl.length);

})