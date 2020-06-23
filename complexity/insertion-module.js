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