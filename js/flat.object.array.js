// Polyfill for flat object array on nested level

const inputObj = {a:1, b:2, c:["four", "five", ['nine', 'ten', ['eleven']]], d:{e:1, f:2},g:{h:["six","seven",['twelve']],i:8}};

const flatObjectArray = (arr) => {
    const result1 = {};

    for (const i in arr) {

        if(typeof(arr[i]) === 'object' && !Array.isArray(arr[i])){

            const temp1 = flatObjectArray(arr[i]);
            for (const j in temp1) {
                result1[i+'_'+j] = temp1[j];
            }

        } else if(Array.isArray(arr[i])){

            arr[i].forEach((item, j) => {
                if(typeof item === 'object'){
                    const temp2 = flatObjectArray(item);
                    for (const k in temp2) {
                        result1[i+'_'+j+'_'+k] = temp2[k];
                    }
                } else{
                    result1[i+'_'+j] = item;
                }
            })

        } else {
            result1[i] = arr[i];
        }
    }
    return result1;
}

console.log(flatObjectArray(inputObj));