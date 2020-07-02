var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function mergeArrays(arrA, arrB) {
    arrC = [].concat(arrA, arrB);
    return mergeSort(arrC);
}

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    var middle = Math.floor(unsortedArray.length / 2);
    var left = unsortedArray.slice(0, middle);
    var right = unsortedArray.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//Exercicio 1
// var arrA = [1, 2, 3, 4];
// var arrB = [5, 6, 7, 8];
// console.log(mergeArrays(arrA, arrB));

//Exercicio 2 utilizando arquivo stdin para entradas
var loop = 1;
var first = 1;

while (loop) {
    var arrSizes = lines.shift().split(" ");
    var arrA = [],
        arrB = [];
    auxA = parseInt(arrSizes.shift());
    if (auxA != 0) {
        arrA.length = auxA;
        arrB.length = parseInt(arrSizes.shift());

        for (i = 0; i < arrA.length; i++) {
            arrA[i] = parseInt(lines.shift());
        }

        for (i = 0; i < arrB.length; i++) {
            arrB[i] = parseInt(lines.shift());
        }

        console.log(mergeArrays(arrA, arrB));

        if (first) {
            lines.shift();
            first = 0;
        }
    } else {
        break;
    }
}