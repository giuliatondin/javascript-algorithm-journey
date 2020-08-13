function sort(arr) {
    for (i = 0; i < arr.length; i++) {
        aux = arr[i];
        j = i - 1;
        while (j >= 0 && aux < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = aux;
    }
}

function bucketSort(arr) {
    var i;
    var minValue = Math.min(...arr);
    var maxValue = Math.max(...arr);
    const bucketSize = 5;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        sort(buckets[i]);
        for (j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }
    return arr;
}

var arr = [0.5, 0.3, 0.4, 0.2, 1, 0.9, 0.7, 0.6, 0, 0.1, 0.8];

console.log(bucketSort(arr));