document.addEventListener('DOMContentLoaded', () => {
  const nestedList = document.querySelector('.nested-list');

  nestedList.addEventListener('click', (event) => {
    const clickedItem = event.target;

    if (clickedItem.tagName === 'LI') {
      // Переключение класса "expanded"
      clickedItem.classList.toggle('expanded');
    }
  });
});

