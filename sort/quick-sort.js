function quickSort(arr, p, r) {
    if (p < r) {
        q = partition(arr, p, r);
        //q = partitionMiddlePivot(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}

function partition(arr, p, r) {
    var pivot = arr[r];
    var i = (p - 1);
    var aux;
    for (j = p; j <= r - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
        }
    }
    aux = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = aux;
    return (i + 1);
}

//Partition utilizando como critério o elemento do meio como pivot
function partitionMiddlePivot(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) left++;
        while (arr[right] > pivot) right--;
        if (left <= right) {
            var aux = arr[left];
            arr[left] = arr[right];
            arr[right] = aux;
            left++;
            right--;
        }
    }
    return left;
}

//Popula array arranjado aleatoriamente
function randomElements(sizeArray) {
    while (arr.length < sizeArray) {
        var r = Math.floor(Math.random() * sizeArray) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
}

var sizeArray = 10;
var arr = [];
randomElements(sizeArray);

console.log(`${arr}`);
quickSort(arr, 0, arr.length - 1);
console.log(`${arr}`);