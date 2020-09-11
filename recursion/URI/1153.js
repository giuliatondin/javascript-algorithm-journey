var input = require('fs').readFileSync('stdin', 'utf8');
var number = input.split(' ');

var result = (function factorial(num) {
    var result = 1;
    if (num > 1) {
        result = num * factorial(num - 1);
    }
    return result;
})(number);

console.log(result);