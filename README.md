# JavaScript Important Interview Questions

<div>
    <details>
        <summary>
            <b>Promises</b>
        </summary>
        <p></p>
        <ul>
            <li>Promises are the JavaScript object that repreasents the eventual completion or failure of an async operation.</li>
            <li>Promise has 3 states - pending, fulfilled, rejected.</li>
            <li>As soon as the promise is fulfilled or rejected - It updates the empty object which was assigned undefined in the pending state. </li>
            <li>A promise resolve only once and it is immutable.</li>
            <li>Using .then() method we can control, when we call the callback functions.</li>
            <li><b>To avaoid callback hell - </b> We use promise chaining to avaoid callback hell, this way our code expands vertically instead of horizontally. Chaining is done by .then()</li>
            <li>Always return a value from .then() method, this return value will be used by next .then() method.</li>
        </ul>
    </details>
    <details>
        <summary>
            <b>Promise – Creation and Usage</b>
        </summary>
        <p></p>
        <ul>
            <li>Promise can be created using <b>new Promise()</b> constructor function.</li>
            <li> This constructor function takes a callback as an argument.</li>
            <p></p>
            <pre>
const promise = new promise((resolve, reject) => {
    resolve();
    reject();
})          </pre>
            <li>The callback function has 2 argument - resolve and reject, which is provided by JavaScript.</li>
            <li>We can only resolve or reject a promise nothing else can be done.</li>  
            <li>An error also can be created using the <b>new Error('error msg')</b> constructor function.</li>
            <li>We can also use the .catch() method to handle the errors during the execution of the promise chain.</li>
            <li>.catch() method only handles the error of .then(), which is define above the .catch() method.</li>
            <li>If .then() method define below the .catch() method then .catch() method wont handle error for this .then() method, and it will get executed no matter what.</li>
            <li>We can have multiple .catch() as per the requirement and then a general .catch() at the end.</li>
            <p></p>
            <pre>
const cart = ['shirt', 'pant', 'jeans'];

const validateCard = (cart) => {
    return true;
}

const createOrder = (cart) => {
    
    const pr = new Promise((resolve, reject) => {

        if(!validateCard(cart)){
            const err = new Error('Cart is not valid');
            reject(err);
        }

        const orderId = '12345';
        setTimeout(() => {
            resolve(orderId);
        }, 2000);
    })
    return pr;
}

const proceedToPayment = (orderId) => {
    return new Promise((resolve, reject) => {
        resolve('Payment Successful');
    })
}

const promise = createOrder(cart);

promise.then((orderId) => {
    console.log(orderId);
    return orderId;
})
.then((orderId) => {
    return proceedToPayment(orderId);
})
.then((paymentInfo) => {
    console.log(paymentInfo);
})
.catch(function (err) {
    console.log(err.message);
})
            </pre>
        </ul>
    </details>
    <details>
        <summary>
            <b>Async await</b>
        </summary>
        <p></p>
        <ul>
            <li>The <b>async</b> keyword transform a regular javascript function into an asynchronous function, causing it to return a Promise. </li>
            <li>An <b>await</b> keyword can only be used inside an async function, to pause its execution and wait for a <b>Promise</b> to resolve before continuing.</li>
            <li>The main difference between a normal function and async function is, an async fuction always return a <b>Promise</b>.</li>
            <p></p>
            <pre>
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
    console.log('Hello JavaScript');

    const val = await p1;
    console.log(val);

    const val2 = await p2;
    console.log(val2);
}

handlePromise();
            </pre>
            <li>When we call the handlePromise() method, it will execute the code line by line.</li>
            <li>It first prints the console log 'Hello JavaScript', then move to the next line and it finds the await keyword </li>
            <li>Here JS engine does not wait to resolve the promise, it will just suspend the handlePromise() method for the time being and move out from the call stack</li>
            <li>It wouldn't block the main thread or it wouldn't freeze our page, so that if any event outside they can execute easily.</li>
            <li>After some time when promise has resolve it again start executing from where it left.</li>
        </ul>
    </details>
    <details>
        <summary>
            <b>Error Vs TypeError</b>
        </summary>
        <p></p>
        <p>In JavaScript, <b>Error</b> is the base constructor for all the in built error objects, while <b>TypeError</b> is the specific type of error that indicates an operation could not be performed, because the provided value is not the specific type.</p>
    </details>
</div>