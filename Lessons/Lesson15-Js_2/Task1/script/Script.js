// 1. Получение второго элемента списка
let listItems = document.querySelectorAll('ul li');
let secondItem = listItems[1];
console.log('Второй элемент списка:', secondItem.textContent);

// 2. Крашение ячеек главной диагонали таблицы в желтый
let table = document.getElementById('myTable');
for (let i = 0; i < table.rows.length; i++) {
    let cell = table.rows[i].cells[i];
    cell.style.backgroundColor = 'yellow';
}