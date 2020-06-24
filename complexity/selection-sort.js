function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                aux = arr[j];
                arr[j] = arr[i];
                arr[i] = aux;
            }
        }
    }
}

//Popula array ordenado
function inOrderElements(sizeArray) {
    aux = sizeArray;
    for (i = 1; i <= sizeArray; i++) {
        arr[i] = i;
    }
}

//Popula array inversamente ordenado
function inverseElements(sizeArray) {
    aux = sizeArray;
    for (i = 0; i < sizeArray; i++) {
        arr[i] = aux;
        aux--;
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
inverseElements(sizeArray);
//randomElements(sizeArray);

console.time('selectionSort');
selectionSort(arr);
console.timeEnd('selectionSort');

console.log(`Array ordenado: ${arr}`);