// find the max difference between 2 elements

const arr = [7, 1, 5, 3, 6, 4];

const maxDifference = (arr) => {
    let minElm = arr[0];
    let maxDiff = 0;

    for(let i=1;i<arr.length;i++){
        let diff = arr[i] - minElm;
        if(diff > maxDiff){
            maxDiff = diff;
        }

        if(arr[i] < minElm){
            minElm = arr[i];
        }
    }
    return maxDiff;
}

console.log(maxDifference(arr));