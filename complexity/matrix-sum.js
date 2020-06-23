/* Author: Giulia Tondin Monteiro */

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function elemSumFor(mat) {
    sum = 0; // C1 1
    for (i = 0; i < mat.length; i++) { // C2 n
        for (j = i + 1; j < mat.length; j++) { // C3 ???
            sum += mat[i][j]; // C4 1
        }
    }
    return sum;
}

var result = elemSumFor(mat);

console.log(result);