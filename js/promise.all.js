// Polyfill for promise.all

const promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)){
            reject('Promise must be a array');
        }

        const results = [];
        let count = 0;

        if(promises.length === 0){
            return resolve([]);
        }

        promises.forEach((element, index) => {
            Promise.resolve(element)
            .then((value) => {
                results[index] = value;
                count += 1;
                
                if(count === promises.length){
                    return resolve(results);
                }
            })
            .catch((err) => {
                reject('Promise failed');
            })
        });
    })
}

const p11 = Promise.resolve(1);
const p22 = Promise.resolve(2);
const p33 = Promise.resolve(3);

promiseAll([p11, p22, p33])
.then((res) =>{
    console.log(res)
})
.catch((err) => {
    console.log('Caught: '+err);
})


