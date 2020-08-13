function countingSort(arr, min, max) {
    var i, j = 0,
        count = [];
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[j++] = i;
        }
    }
    return arr;
}

var arrPos = [1, 0, 2, 5, 4, 3];
var arrNeg = [-1, 0, -4, 5, 4, 1];

//Ordena apenas inteiros positivos
console.log(countingSort(arrPos, 0, Math.max(...arrPos)));
//Ordena todos os inteiros
console.log(countingSort(arrNeg, Math.min(...arrNeg), Math.max(...arrNeg)));