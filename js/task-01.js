const ulEl = document.querySelector('#categories');
const itemsEl = [...ulEl.children];
console.log('Number of categories:', itemsEl.length);

itemsEl.forEach(item => {
    const titleEl = item.firstElementChild;
    console.log('Category:', titleEl.textContent);

    const innerUlEl = item.lastElementChild;
    const innerItemsEl = [...innerUlEl.children];
    console.log('Elements:', innerItemsEl.length);

})