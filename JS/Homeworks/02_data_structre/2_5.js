const personnel = {
  'директор': 'Иванов Иван',
  'бухгалтер': 'Петрова Мария',
  'менеджер': 'Сидоров Алексей',
  'секретарь': 'Кузнецова Ольга',
  toString: function() {
    let result = "Должность: ФИО\n";
    for (let position in this) {
      if (position !== 'toString') {
        result += position + ": " + this[position] + "\n";
      }
    }
    return result;
  }
};

const personnel_copy = {...personnel};

personnel_copy['директор'] = 'Петрова Мария';
personnel_copy['бухгалтер'] = 'Иванов Иван';

console.log(personnel.toString());
console.log(personnel_copy.toString());
