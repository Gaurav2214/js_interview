// check anagram

let str1 = 'abc';
let str2 = 'bca';

const anagram = (st1, st2) => {
    let s1 = st1.toLowerCase().split('').sort().join('');
    let s2 = st2.toLowerCase().split('').sort().join('');
    let result = '';

    if(s1 === s2){
        result = true;
    } else {
        result = false;
    }
    return result;

} 

console.log(anagram(str1, str2));