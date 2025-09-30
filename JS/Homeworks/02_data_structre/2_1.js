function changeStr(my_string){
  my_string = my_string.split('-');
  let secondWord = my_string[1].at(0).toUpperCase();
  for (let i = 1; i < my_string[1].length; i++) {
    secondWord += my_string[1][i];
  }
  let result = my_string[0] + secondWord;
  return result;
}

console.log(changeStr('background-color'));
