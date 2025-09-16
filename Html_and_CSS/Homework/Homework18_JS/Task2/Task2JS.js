let a = parseInt(prompt("Input number a"));
let b  = parseInt(prompt("Input number b"));
if (!isNaN(a) && !isNaN(b)){
    let mid_sum = 0;
    let count = 0;
    for (let i = a; i <= b; i++){
        if (i % 3 == 0){
            mid_sum += i;
            count ++;
        }
    }
    if (count > 0){
        console.log(mid_sum / count);
    }
    else{
        console.log("Error");
    }
}
else{
    console.log("Error");
}
