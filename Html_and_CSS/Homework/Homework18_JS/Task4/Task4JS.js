function camelize(str){
    let result = "";
    let is_upper = false;

    for (let i = 0; i < str.length; i++){
        const char = str.charAt(i);

        if (char == '-'){
            is_upper = true
        }else{
            if (is_upper){
                result += char.toUpperCase();
                is_upper = false;
            }else{
                result += char;
            }
        }
    }
    return result
}

console.log(camelize("background-color"))
console.log(camelize("font-size"))
//word = prompt("Input the word")
//console.log(camelize(word))