
// Implement auto-retry for promises

const retryPromise = (fn, retries = 3, delay) => {
    let delayDuration = delay || 0;

    return new Promise((resolve, reject) => {
        const attemp = (count) => {
            fn
            .then((value) => {
                return resolve(console.log(value));
            })
            .catch((err) => {
                if(count === 0){
                    return reject(new Error('Invalid operation'));
                }
                setTimeout(() => {
                    attemp(count-1);
                    console.log('retries'+count);
                }, delayDuration);
            })
        }
        attemp(retries);
    })
}

const prTry = new Promise((resolve, reject) => {
    let statusCode = 300;
    if(statusCode === 200){
        resolve('Success');
    } else {
        reject((err) => console.log(err));
    }
})

retryPromise(prTry, 3, 2000);


