function fourth_task(n){
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      console.log(num);
      count++;
    }
    num++;
  }
}

function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

// Пример вызова:
fourth_task(10);
