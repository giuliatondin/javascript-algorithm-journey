/* Author: Giulia Tondin Monteiro */

function power(exponent) {
    var base = 2;
    return exponent == 0 ? 1 : base * power(--exponent);
}

var exponent = 5;
var resultTest = power(exponent);

console.log(`2 elevado a ${exponent} = ${resultTest}`)