function fifth_task(n){
  for (let i = 1; i <= n; i++){
    if(n % i == 0){
      console.log(i);
    }
  }
}

let n = 28;

console.log("Делители числа " + n + ":");
fifth_task(n);
