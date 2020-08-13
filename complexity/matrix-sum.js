/* Author: Giulia Tondin Monteiro */

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function elemSumFor(mat) {
    sum = 0; // C1 1
    for (i = 0; i < mat.length; i++) { // C2 n
        for (j = i + 1; j < mat.length; j++) { // C3 Melhor caso: 1 / Pior caso: n
            sum += mat[i][j]; // C4 1
        }
    }
    return sum;
}

//Melhor caso: T(n) = 1 + n * (1 + 1) = n
//Pior caso: T(n) = 1 + n * (n + 1) = n²

var result = elemSumFor(mat);

console.log(result);