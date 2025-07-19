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
            <pre>
                const promise = new promise((resolve, reject) => {
                    resolve();
                    reject();
                })
            </pre>
            <li>The callback function has 2 argument - resolve and reject, which is provided by JavaScript.</li>
        </ul>
    </details>
</div>