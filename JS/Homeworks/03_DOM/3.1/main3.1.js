let tbl = document.getElementsByClassName('calend')[0];

let today = new Date()
const year = today.getFullYear();
const month = today.getMonth();
const daysInMonth = new Date(year, month + 1, 0).getDate();
const firstDayOfWeek = new Date(year, month, 1).getDay();
const monthNames = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вc"];

let p = document.createElement('b');
p.textContent = monthNames[month];
let curMonth = document.getElementsByTagName('header')[0];
curMonth.appendChild(p);


let tr = document.createElement('tr');
for (let i = 0; i < 7; i++) {
  let td = document.createElement('th');
  td.textContent = weekDays[i];
  tr.appendChild(td);
}
tbl.appendChild(tr);

tr = document.createElement('tr');
// Сдвиг для начала недели с понедельника
let shift = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
for (let i = 0; i < shift; i++) {
  let td = document.createElement('td');
  td.textContent = "";
  tr.appendChild(td);
}
for (let day = 1; day <= daysInMonth; day++) {
  if (tr.children.length === 7) {
    tbl.appendChild(tr);
    tr = document.createElement('tr');
  }
  let td = document.createElement('td');
  td.textContent = day;
  tr.appendChild(td);
}
if (tr.children.length > 0) {
  tbl.appendChild(tr);
}
