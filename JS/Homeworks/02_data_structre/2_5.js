const personnel = {
  'директор': 'Иванов Иван',
  'бухгалтер': 'Петрова Мария',
  'менеджер': 'Сидоров Алексей',
  'секретарь': 'Кузнецова Ольга'
};

const personnel_copy = { ...personnel}
personnel_copy['директор'] = 'Петрова Мария';
personnel_copy['бухгалтер'] = 'Иванов Иван';

for(let i = 0; i < Object.keys(personnel).length; i++){
  console.log(Object.keys(personnel)[i] + ": " + Object.values(personnel)[i]);
}

for(let i = 0; i < Object.keys(personnel_copy).length; i++){
  console.log(Object.keys(personnel_copy)[i] + ": " + Object.values(personnel_copy)[i]);
}


personnel_str = personnel.to_string()
console.log(personnel_str);
personnel_copy_str = personnel_copy.to_string()
console.log(personnel_copy_str);


