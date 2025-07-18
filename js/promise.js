// Promise
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

// Promise is an object that represents eventual completion or failure of an async operation.
// It has 3 states - pending, fulfilled, rejected
// As soon as the promise is fulfilled/rejected, it updates the empty object which is assigned undefined in pending state. 