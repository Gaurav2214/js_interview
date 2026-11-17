
const arr = [1, 2, 5, 3, 4];

const isSorted = (arr) => {
    let result = true;
    for(let i=1; i<arr.length;i++){
        if(arr[i] < arr[i-1]){
            result = false;
            break;
        }
    }
    return result;
}

console.log(isSorted(arr));