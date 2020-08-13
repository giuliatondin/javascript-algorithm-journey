function simpleSort(arr) {
    var j = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            j++;
        }
    }
    for (i = 0; i < j; i++) {
        arr[i] = 1;
    }
    for (; i < arr.length; i++) {
        arr[i] = 2;
    }
    return arr;
}

var arr = [2, 2, 1, 1, 2, 1];

console.log(simpleSort(arr));