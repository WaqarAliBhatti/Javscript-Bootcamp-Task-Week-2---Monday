function union(a,b){
    let unionArray=[...a,...b];
    console.log(unionArray);
    let count=0;
    for(let i=0;i<unionArray.length;i++){
       count=0;
        for(let j=0;j<unionArray.length;j++){
            if(unionArray[i]==unionArray[j]){
                count++;
            }
        }
        if(count==1){
        return unionArray
        }
    }
}
let unionSet =new Set
unionSet=union([1,2,3],[3,4,5])
console.log(unionSet)

unionSet=[...[1,2,3],...[3,4,5]];