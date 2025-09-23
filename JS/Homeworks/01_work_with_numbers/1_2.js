function second_task(n){
  if (n == parseInt(n) && n > 0) return true; else return false;
}

n = 10
m = 1.2
c = -1 

console.log("Является ли число " + n + " натуральным? " + second_task(n));
console.log("Является ли число " + m + " натуральным? " + second_task(m));
console.log("Является ли число " + c + " натуральным? " + second_task(c));
