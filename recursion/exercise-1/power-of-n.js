// Author: Giulia Tondin Monteiro

function power(base, exponent) {
    return exponent == 0 ? 1 : base * power(base, --exponent);
}

var base = 4,
    exponent = 3;

resultTest = power(base, exponent);

console.log(`${base} elevado a ${exponent} = ${resultTest}`);