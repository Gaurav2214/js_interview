// Shallow copy and deep copy of object 

const person = {
    name: 'Gaurav',
    age: 35
}
const person1 = {
    name: {
        firstName: {
            abcd: 'def',
            xyz: 'ijk'
        }
    },
    age: 35
}

const person2 = person; 
// in this case it just copy the reference of person object, so if we try to change any attribute value in person2 then it will same reflect to person object also.

// shallow copy

// const person3 = {...person};
const person3 = Object.assign({}, person1);

//Deep copy

const person4 = JSON.parse(JSON.stringify(person1));


person4.name.firstName.abcd= 'Raman';

console.log(person1);
console.log(person4);