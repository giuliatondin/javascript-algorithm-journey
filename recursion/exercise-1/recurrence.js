// Author: Giulia Tondin Monteiro

function recurrence(n) {
    return n == 0 ? 3 : 2 * recurrence(n - 1) + 3;
}

var n = 4;
var resultTest = recurrence(n);

console.log(`f(${n}) = ${resultTest}`);