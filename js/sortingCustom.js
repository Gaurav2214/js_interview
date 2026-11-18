const arr = [5, 2, 8, 1, 3];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            // Swap elements
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log(arr); 