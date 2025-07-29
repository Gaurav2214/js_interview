// Count each element in an array - How many times they come in array

const arrCount = [1, 3, 4, 2, 3, 4, 5];

const elmCount = (arr) => {

    const result = {};

    arr.filter((item, index) => {
        if(result[item]){
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    })
    return result;
}

console.log(elmCount(arrCount));