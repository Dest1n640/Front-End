document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('dynamicList');
    let itemText;

    while (true) {
        itemText = prompt("Enter list item (or leave blank to finish):");
        if (!itemText) break;

        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
    }
});