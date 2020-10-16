/* Author: Giulia Tondin Monteiro */

// 3) Dado um vetor contendo 2^i elementos no formato {a1, a2,..., an, b1, b2,...,bn} 
// reorganize os elementos do vetor na seguinte forma {a1, b1, a2, b2,..., an, bn}.

function rearrange(arr, first, last){
    if(last - first == 1) return;
    var mid = Math.floor((first + last) / 2);
    var sec_mid = Math.floor((first + mid) / 2);
    var aux1 = mid + 1;
    for(i = sec_mid + 1; i <= mid; i++){
        var aux2 = arr[i];
        arr[i] = arr[aux1];
        arr[aux1++] = aux2;
    }
    rearrange(arr, first, mid);
    rearrange(arr, mid + 1, last);
}

// arr 2^3 = 8
var arr = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4'];
console.log(`Vetor antes: ${arr}`);
rearrange(arr, 0, arr.length - 1);
console.log(`Vetor reorganizado: ${arr}`);