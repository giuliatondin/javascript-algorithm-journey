/* Author: Giulia Tondin Monteiro */

function factorial(num) {
    var result = 1;
    if (num > 1) {
        result = num * factorial(num - 1);
    }
    return result;
}

var number = 4;
var resultTest = factorial(number);

console.log(`Fatorial de ${number}: ${resultTest}`);