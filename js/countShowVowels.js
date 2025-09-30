// Count Vowels

const strVowels1 = 'gaurav-saumya';

const countShowVowels = (str) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const str1 = str.split('');
    let result = {};

    for(let i=0; i < vowels.length; i++){
        for(j=0; j < str1.length; j++){
            if(vowels[i] === str1[j]){
                if(result[str1[j]]){
                    result[str1[j]] += 1;
                } else {
                    result[str1[j]] = 1;
                }
            }
        }
    }
    return result;
}
console.log(countShowVowels(strVowels1));