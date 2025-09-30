function capitalizeWords(sentence) {
    // Your implementation

    const result = [];
    const strArray = sentence.trim().split(' ');

    strArray.map((item) => {
        if(item !== ''){
            const subStr = item.trim().split('');
            const res = [];
            for(let i=0;i<subStr.length;i++){
                if(i == 0){
                    res.push(subStr[i].toUpperCase());
                } else {
                    res.push(subStr[i].toLowerCase());
                }
            }
            result.push(res.join(''));
        }
    })

    return result.join(' ');
}

console.log(capitalizeWords('     Javascript    is     fun.'));