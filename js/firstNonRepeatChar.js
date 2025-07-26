// 1st non repeating character

const str5 = 'abbabcd';

const firstNonRepeatChar = (str) => {
    let result = '';
    const strArr = str.split('');

    for(let i=0;i<strArr.length;i++){
        let count = 0;
        for(let j=0;j<strArr.length;j++){
            if(strArr[i] == strArr[j]){
                count = count + 1;
            }
        }
        if(count == 1){
            result = strArr[i];
            break;
        }
    }
    return result;

}

console.log(firstNonRepeatChar(str5));