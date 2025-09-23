function first_task(a, b){
  while (a != 0 && b != 0){
    if(a > b)
      a = a % b;
    else
      b = b % a;
  }
  return a + b == 1;
}

// let a = Number(prompt("Enter a:")); 
//let b = Number(prompt("Enter b:")); //Для браузера

let a = 15;
let b = 28;

console.log("Взаимно ли просты два числа: " + a + " и " + b + " ? " + first_task(a, b));
