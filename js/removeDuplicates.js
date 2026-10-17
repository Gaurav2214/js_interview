// Remove duplicate elemnet from an array

const arrDup = [1,3,4,2,3,4,5,3];

const removeDuplicate = (arr) => {
    const result1 = [];
    // arr.filter((item, index) => {
    //     if(arr.indexOf(item) === index){
    //         result.push(item);
    //     }
    // })

    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) !== i){
            result1.push(arr[i]);
        }
    }

    //let result1 = new Set([...arr]);

    return result1;
}

console.log(removeDuplicate(arrDup));