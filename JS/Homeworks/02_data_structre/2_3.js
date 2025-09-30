words = {
  'for' : 'для',
  'example' : 'примера',
  'four' : "четыре",
  'words' : 'слова'
}


function translate(word_to_translate, words) {
  let arr = word_to_translate.split(' ');
  let result = [];
for (let i = 0; i < arr.length; i++) {
   if (words[arr[i]]) {
      result.push(words[arr[i]]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(' ');
}

console.log(translate('for example four words', words));
