/* Author: Giulia Tondin Monteiro */

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function elemSumFor(mat) {
    sum = 0; // C1 1
    for (i = 0; i < mat.length; i++) { // C2 n
        for (j = i + 1; j < mat.length; j++) { // C3 Pior caso: n - 1
            sum += mat[i][j]; // C4 1
        }
    }
    return sum; // C5 1
}

//Pior caso: T(n) = c1 + c2n * (c3(n - 1) * c4) + c5 = 
//           T(n) = c1 + c2n * (c3n - c3 * c4) + c5 = 
//           T(n) = a + bn * (cn - de) + f = n² (função quadrática) 

var result = elemSumFor(mat);

console.log(result);