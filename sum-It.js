function sumIt(...a){
    var summedArray=0;
    if(typeof(a)==='object'){
        var total=0;
        // console.log(a.length)
        
        for(let i=0;i<3;i++){
            total=total+a[0][i]
        }
        
    return total;
    }


    
    else{       
        console.log(typeof(a))
        return summedArray+=[...a]
    }
}


let numbers=[1,2,7]; 
// console.log(typeof(numbers))
console.log(sumIt(2,3))