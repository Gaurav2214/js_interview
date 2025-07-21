// flat array polyfill

const arrDeep = [
    [1, 2], 
    [3, 4], 
    [5, 6, [7,8], 9], 
    [10, 11, 12]
];

const flatArray = (arr) => {

    const result = [];
    arr.forEach((element) => {
        if(Array.isArray(element)){
            result.push(...flatArray(element))
        } else {
            result.push(element);
        }
    }); 
        
    return result;
}

console.log(flatArray(arrDeep));