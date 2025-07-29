// Count Vowels

const strVowels = 'gaurav-saumya';

const countVowels = (str) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const str1 = str.split('');
    let result = 0;

    for(let i=0; i < vowels.length; i++){
        for(j=0; j < str1.length; j++){
            if(vowels[i] === str1[j]){
                result += 1;
            }
        }
    }
    return result;
}

console.log(countVowels(strVowels))