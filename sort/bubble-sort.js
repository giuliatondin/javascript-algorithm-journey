function bubbleSort(arr) {
    var aux;
    var k = arr.length - 1;
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < k; j++){
            if(arr[j] < arr[j+1]){
                aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
        k--;
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
var sizeArray = 5; //case tests: 100, 1000, 10000, 50000
var arr = [];

randomElements(sizeArray);

console.log(`${arr}`);
bubbleSort(arr);
console.log(`${arr}`);