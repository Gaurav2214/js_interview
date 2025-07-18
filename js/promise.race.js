
// Polyfill for promice.race

const promiseRace = (promises) => {

}

const p5 = Promise.resolve('race1');
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