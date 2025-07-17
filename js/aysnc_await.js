

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolve value 1!!');
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolve value 2!!');
    }, 10000);
});

// await can only be used inside the async function

const handlePromise = async () => {
    console.log('Namaste JavaScript');

    const val = await p1;
    console.log(val);

    const val2 = await p2;
    console.log(val2);
}

handlePromise();

// when we will call the handlePromise(), it will come to call stack and execute the code line by line,
// It first prints the console log 'Namaste JavaScript', then move to the next line and it finds the await 
// here JS engine does not wait to resolve the promise, it will just suspend the handlePromise() method for the time being and move out from the call stack,
// It wouldn't block the main thread or it wouldn't freeze our page, so that if any event outside they can execute easily.
// After some time when promise has resolve it again start executing from where it left.
