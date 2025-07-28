// Remove an element from array and append on begining of the array

const arrApp = [1, 3, 4, 2, 3, 4, 5];

console.log(arrApp.splice(2, 1).concat(arrApp));