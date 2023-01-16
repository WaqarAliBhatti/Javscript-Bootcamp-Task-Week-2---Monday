let inputNumber= parseInt(prompt("Enter the Number"));

function isPrime(inputNumber){
    for(let i=2;i<inputNumber;i++){
        if(inputNumber%i==0){
            return false
        }
    }
    return true;
}
console.log(isPrime(inputNumber));