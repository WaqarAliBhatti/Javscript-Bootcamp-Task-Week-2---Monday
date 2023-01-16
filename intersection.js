function intersection(a,b){

    let instersecArray=[...a,...b]

    let count=0;
    for(let i=0;i<instersecArray.length;i++){
        count=0;
        for(let j=0;j<instersecArray.length;j++){
            if(instersecArray[i]==instersecArray[j]){
                count++;

            }
        }

        if(count==2){
            instersecArray.push(instersecArray[i])
            console.log(instersecArray[i]);

        }
    }
}
intersection([1,2,3],[2,3,4])