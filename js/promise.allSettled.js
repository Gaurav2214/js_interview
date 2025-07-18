
// polyfill for promise.allSettled

// It is just like promisea.all in case of success but in case of failure it wont show the error, 
// it waits for all the promises to settled and then it returns an array of result => both pass/fail in an array

const promisAllSettled = (promises) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)){
            return reject('Must be an array type - Settled');
        }

        const results = [];
        let count = 0;

        if(promises.length === 0){
            return resolve([]);
        }

        promises.forEach((element, index) => {
            Promise.resolve(element)
            .then((val) => {
                results[index] = {status: 'fulfilled', val};
            })
            .catch((err) => {
                results[index] = {status: 'rejected', err};
            })
            .finally((res) => {
                count += 1;
                if(count === promises.length){
                    resolve(results);
                }
            })
        });
    })
}

const p21 = Promise.resolve(4);
const p31 = Promise.reject(5);
const p41 = Promise.resolve(6);

promisAllSettled([p21, p31, p41])
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log("Caught: "+ err);
})

// In built method

Promise.allSettled([p21, p31, p41])
.then((value) => {
    console.log(value)
})
.catch((err) => {
    console.log("Caught: "+ err);
})