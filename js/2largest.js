var arr = [2,4,5,6,9,1,3,7,10,6,3];

const largestSecond = (arr) => {
    // const sortArr = arr.sort((a, b) => a - b);
    // return sortArr[sortArr.length - 2];

    let largest = arr[0];
    let result = null;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            result = largest;
            largest = arr[i];
        } else if(arr[i] > result && arr[i] < largest){
            result = arr[i];
        }
    }
    return result;
}

// const largestSecond = (arr) => {
//     let max = arr[0]; 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i]; 
//         }
//     }
//     return max;
// }

console.log(largestSecond(arr));