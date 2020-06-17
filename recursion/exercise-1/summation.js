// Author: Giulia Tondin Monteiro

var sum = (function summation(n, k) {
    if (k == 0) {
        return n;
    }
    if (k > 0) {
        result = n + summation(n, k - 1);
    }
    return result;
})(5, 3);

console.log(`Somatório: ${sum}`);