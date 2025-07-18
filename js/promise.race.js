
// Polyfill for promice.race


const promiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)){
            return reject('Must be an array type - Race')
        }

        if(promises.length === 0){
            return resolve([]);
        }
        for(const promise of promises){
            Promise.resolve(promise)
            .then(resolve)
            .catch(reject)
        }
    })
}

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('race1');
    }, 0);
})
const p6 = Promise.resolve('race2');
const p7 = Promise.resolve('race3');

promiseRace([p5, p6, p7])
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log('Caught: '+ err);
});

// In Built method

Promise.race([p5, p6, p7])
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log('Caught: '+err);
})

// It takes an array of promises and returns the first settled promise wheather it is success or failure.