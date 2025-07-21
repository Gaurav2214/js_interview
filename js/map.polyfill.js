// Polyfill for map function


if(!Array.prototype.mapPolyfill){

    Array.prototype.mapPolyfill = function(callBack) {

        if(this === null){
            throw new TypeError('null');
        }

        if(typeof callBack !== 'function'){
            throw new TypeError('Not a function');
        }

        const results = [];

        for(let i=0;i<this.length;i++){
            results.push(callBack(this[i], i, this));
        }
        return results;

    }
}


const numbers = [1, 2, 3];
const doubled = numbers.mapPolyfill((num, i) => num*2);
console.log(doubled);