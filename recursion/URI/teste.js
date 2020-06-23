var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var number = parseInt(lines.shift());
var fibNot = [];
var fib = [];

fiboNot();

function fiboNot() {
    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= 100100; ++i) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    for (i = 1, j = 2, k = 1; i <= 100100; ++i) {
        if (fib[j] != i) {
            fibNot[k++] = i;
        } else {
            ++j;
        }
    }
}

console.log(fibNot[number]);