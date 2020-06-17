/* Author: Giulia Tondin Monteiro */

function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return (fibonacci(num - 1) + fibonacci(num - 2));
    }
}

var number = 8;
var resultTest = fibonacci(number);

console.log(`F(${number}): ${resultTest}`);