// let inputNumber=parseInt(prompt('Enter the Number'));

function squareIt(a){
    if(typeof(a)==='object'){
        for(let i=0;i<a.length;i++){
            var squaredArray=[];
            a[i]*=a[i];
        }
    return a;
    }
    else{
        return a*a
    }
}


let numbers=[1,2,3]; 
// console.log(typeof(numbers))
console.log(squareIt(5))