let inputNumber=parseInt(prompt("Enter the Number"));

function isOdd(inputNumber){
    if(inputNumber%2==0){
        return false;
    }
    else{
        return true;
    }
}

console.log(isOdd(inputNumber));