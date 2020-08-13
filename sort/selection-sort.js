function selectionSort(arr) {
    for (i = 0; i < arr.length - 1; ++i) {
        var min = i;
        for (j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var x = arr[i];
        arr[i] = arr[min];
        arr[min] = x;
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
var sizeArray = 10; //case tests: 100, 1000, 10000, 50000
var arr = [];

randomElements(sizeArray);

console.log(`${arr}`);
selectionSort(arr);
console.log(`${arr}`);