let N = parseInt(prompt("Input number N"));
for (let i = 2; i < 2 ** 64; i = i ** 2){
    if (N == i){
        console.log(N + " Yes")
        break
    }
    else{
        console.log("No")
    }
}