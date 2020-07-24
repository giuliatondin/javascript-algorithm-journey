/* Author: Giulia Tondin Monteiro */

// 2) Procure em um vetor ordenado de inteiros o valor mais próximo de um número informado pelo usuário
function binSearchClosest(arr, target){
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) return arr[mid];
    if (arr.length === 1) return arr[0];
    return (arr[mid] > target) ? binSearchClosest(arr.slice(0, mid), target) : binSearchClosest(arr.slice(mid), target);
  }

var arr = [2, 3, 5, 6, 7];
var target = 4;

var result = binSearchClosest(arr, target);

console.log(`O valor mais próximo de ${target} no vetor é ${result}`); 