function third_task(n){
  let my_arr = []
  for (let i = 2; i < n;i++){
    my_arr.push(i);
  }
  for (let i = 0; i < my_arr.length; i++){
    for (let j = 0; j < my_arr.length; j++){
      if(my_arr[j] % my_arr[i] == 0 && my_arr[j] !== my_arr[i]){
        my_arr.splice(j, 1)
      }
    }
  }
  return my_arr.sort((a, b) => a - b);
}

let n = 30

console.log("Простые числа меньше " + n + ": " + third_task(n));
