var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numTests = parseInt(lines.shift());

function fibonacci(num) {
    if (num <= 1) {
        call++;
        return num;
    } else {
        call++;
        return (fibonacci(num - 1) + fibonacci(num - 2));
    }
}

for (i = 1; i <= numTests; i++) {
    var number = parseInt(lines.shift());
    var call = -1;
    var result = fibonacci(number);
    console.log(`fib(${number}) = ${call} calls = ${result}`);
}