const daysOfWeek = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',
  getCurrentDay: function() {
  const jsDay = new Date().getDay();
  const number = jsDay === 0 ? 7 : jsDay;
  return this[number];
}
};


function day_of_week(number, daysOfWeek){
  if (daysOfWeek[number]) {
    return daysOfWeek[number];
  }
  else{
    return "Нет такого дня";
  }
}

console.log(day_of_week(3, daysOfWeek));
console.log(day_of_week(6, daysOfWeek));
console.log(day_of_week(8, daysOfWeek));
console.log("Сегодня: " + daysOfWeek.getCurrentDay());
