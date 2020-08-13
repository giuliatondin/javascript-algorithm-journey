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

//Popula array arranjado aleatoriamente
function randomElements(sizeArray) {
    while (arr.length < sizeArray) {
        var r = Math.floor(Math.random() * sizeArray) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
}

//Compare time execution
//var sizeArray = 10; //case tests: 100, 1000, 10000, 50000
var arr = [7, 5, 4, 6, 9, 8];

//randomElements(sizeArray);

console.log(`${arr}`);
insertionSort(arr);
console.log(`${arr}`);