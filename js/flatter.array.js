// flat array polyfill

const arrDeep = [
    [1, 2], 
    [3, 4], 
    [5, 6, [7,8], 9], 
    [10, 11, 12]
];

const result1 = [];
const flatArray = (arr) => {
    

    if(arr.length === 0){
        return result1;
    }

    arr.map((item) => {
        if(Array.isArray(item)){
            flatArray(item); 
        } else {
            result1.push(item);
        }
    })



    return result1;
}

console.log(flatArray(arrDeep));



















// const flatArray = (arr) => {

//     const result = [];
//     arr.forEach((element) => {
//         if(Array.isArray(element)){
//             result.push(...flatArray(element))
//         } else {
//             result.push(element);
//         }
//     }); 
        
//     return result;
// }

// console.log(flatArray(arrDeep));




