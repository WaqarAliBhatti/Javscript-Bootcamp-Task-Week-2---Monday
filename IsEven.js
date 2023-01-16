let inputNumber=parseInt(prompt("Enter the Number"));

function isEven(inputNumber){
    if(inputNumber%2==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(inputNumber));