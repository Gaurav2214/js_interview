// Polyfill for filter method


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callBack) {

        if(this === null){
            return new TypeError('null');
        }

        if(typeof callBack !== 'function'){
            return new TypeError('type error');
        }

        const result = [];

        for(let i=0;i<this.length;i++){
            if(callBack(this[i], i, this)){
                result.push(this[i]);
            }
        }
        return result;
    }
}

const numbers1 = [1, 2, 3, 4];
const evenNum = numbers1.myFilter((num) => num%2==0);
console.log(evenNum);
