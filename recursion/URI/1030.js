var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numTests = parseInt(lines.shift());

function kill(n, k) {
    return n == 1 ? 0 : (kill(n - 1, k) + k) % n;
}

for (i = 0; i < numTests; i++) {
    var caseTest = lines.shift().split(" ");
    var n = parseInt(caseTest.shift());
    var k = parseInt(caseTest.shift());
    var result = kill(n, k) + 1;
    console.log(`Case ${i+1}: ${result}`);
}