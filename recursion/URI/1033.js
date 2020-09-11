var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var caseTest = lines.shift().split(" ");
var n = parseInt(caseTest.shift());
var b = parseInt(caseTest.shift());