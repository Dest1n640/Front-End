let my_arr = [9, 8, 7, 6, 5, 4,3,2,1];
let first_new_arr = my_arr.slice().reverse(); //Копируем и переворачиваем
                                             // методами js
let second_new_arr = []
for(let i = my_arr.length - 1; i >= 0; i--){
  second_new_arr.push(my_arr[i])
}
console.log(my_arr)
console.log(first_new_arr)
console.log(second_new_arr)
