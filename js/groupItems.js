// Group items on the basis of age of given array of object

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 }
];

const groupItems = (obj) => {

    const result = {};
    obj.filter((item) => {
        if(result[item.age]){
            result[item.age] += 1;
        } else {
            result[item.age] = 1;
        }
    });

    return result;
}

console.log(groupItems(people));