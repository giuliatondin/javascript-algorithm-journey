/* Author: Giulia Tondin Monteiro */

// 1) Implementar a busca linear e a busca binária para um vetor de tamanho 10^9
function linearSearch(arr, value) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == value) return true;
    }
    return false;
}

function binSearch(arr, start, end, value) {
    let mid;
    if (start > end) {
        return false;
    } else {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] == value) {
            return true;
        } else {
            return arr[mid] > value ? binSearch(arr, start, mid - 1, value) : binSearch(arr, mid + 1, end, value);
        }
    }
}

//Popula array ordenado
function inOrderElements(sizeArray) {
    console.log('Populando vetor, aguarde...');
    aux = sizeArray;
    for (i = 1; i <= sizeArray; i++) {
        arr[i] = i;
    }
}
var sizeArray = 100000000;
var arr = [];
var value = 234;
var result;

inOrderElements(sizeArray);

//result = linearSearch(arr, value);
result = binSearch(arr, 0, arr.length - 1, value);

if (result) {
    console.log('Elemento encontrado');
} else {
    console.log('Elemento não encontrado');
}