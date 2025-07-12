let number = prompt("Input the number")
let a = 1
if (number == None){
    console.log("The number was not input")
}
while (a * a <= number){
    console.log(a * a)
    a += 1
}
