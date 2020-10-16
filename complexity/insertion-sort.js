/* Author: Giulia Tondin Monteiro */

function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while ((j >= 0) && (arr[j] > key)) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

//Popula array inversamente ordenado
function inverseElements(sizeArray) {
    aux = sizeArray;
    for (i = 0; i < sizeArray; i++) {
        arr[i] = aux;
        aux--;
    }
}

//Popula array ordenado
function inOrderElements(sizeArray) {
    aux = sizeArray;
    for (i = 1; i <= sizeArray; i++) {
        arr[i] = i;
    }
}

//Popula array arranjado aleatoriamente
function randomElements(sizeArray) {
    while (arr.length < sizeArray) {
        var r = Math.floor(Math.random() * sizeArray) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
}

//Compare time execution
var sizeArray = 100; //case tests: 100, 1000, 10000, 50000
var arr = [];


//inOrderElements(sizeArray);
//inverseElements(sizeArray);
randomElements(sizeArray);

console.time('insertionSort');
insertionSort(arr);
console.timeEnd('insertionSort');

//console.log(`Array ordenado: ${arr}`);