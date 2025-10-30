let tb = document.getElementsByClassName('table')[0];

// Строка заголовков
let headerTr = document.createElement('tr');
headerTr.appendChild(document.createElement('th')); // пустой угол
for (let i = 1; i <= 10; i++) {
  let th = document.createElement('th');
  th.textContent = i;
  headerTr.appendChild(th);
}
tb.appendChild(headerTr);

// Основные строки
for (let i = 1; i <= 10; i++) {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = i;
  tr.appendChild(th);

  for (let j = 1; j <= 10; j++) {
    let td = document.createElement('td');
    td.textContent = i * j; // компактный вывод
    tr.appendChild(td);
  }
  tb.appendChild(tr);
}
