var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numTests = parseInt(lines.shift());
var arr = [];

function add(n) {
    if (!arr[n - 1]) add(n - 1);
    arr[n] = arr[n - 1] + arr[n - 2];
}  

function fibonacci(n) {
    arr[0] = 0;
    arr[1] = 1;
    if (n >= 2) add(n - 1);
}

fibonacci(61);

for (i = 0; i < numTests; i++) {
    var pos = parseInt(lines.shift());
    console.log(`Fib(${pos}) = ${arr[pos]}`);
}