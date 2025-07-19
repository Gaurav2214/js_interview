
// Implement auto-retry for promises

const retryPromise = (fn, retries = 3, delay) => {
    let delayDuration = delay || 0;

    return new Promise((resolve, reject) => {
        const attemp = (count) => {
            fn
            .then(resolve)
            .catch((err) => {
                if(count === 0){
                    return reject('Invalid operation');
                }
                setTimeout(() => {attemp(count-1)}, delayDuration);
            })
        }
        attemp(retries);
    })
}

retryPromise();


