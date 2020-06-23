var input = require('fs').readFileSync('stdin', 'utf8');
var number = input.split('\n');

let c = 3
let a = 1;
let b = 2;

function fibonot(n) {
    if (n > 2) {
        a = b
        b = c
        c = a + b;
        n = (c - b - 1 - n);
        return fibonot(n);
    }
    return b + (c - b - 1 + n);
}

console.log(fibonot(number))