
// polyfill of promise.any

// It is quite similar to Promise.race() but it will wait and retuens 1st success promise

const promiseAny = (promises) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)){
            return reject('Must be an array type');
        }

        const rejections = [];
        let rejectionCount = 0;
        const total = promises.length;

        if(total === 0){
            return reject(new AggregateError([], 'All promises were rejected'));
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(resolve)
            .catch((err) => {
                rejections[index] = err;
                rejectionCount += 1;

                if(rejectionCount === total){
                    return reject(new AggregateError([], 'All promises were rejected'));
                }
            })
        })
    })
}

const p8 = Promise.reject('any1');
const p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('any2');
    }, 1);
})
const p10 = Promise.resolve('any3');


promiseAny([p8, p9, p10])
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console('caught: '+err);
})

// In Built method

Promise.any([p8, p9, p10])
.then((value) => {
    console.log(value)
})
.catch((err) => {
    console.log('Caught: '+ err);
})