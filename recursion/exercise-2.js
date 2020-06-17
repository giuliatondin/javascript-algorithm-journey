// Author: Giulia Tondin Monteiro

//Tarefa a)
var product = (function product(a, b) {
    return b == 0 || a == 0 ? 0 : a + product(a, --b);
})(2, 5);

console.log(`a) ${product}`);

//Tarefa b)
var word = (function palindrome(str) {
    var len = str.length;
    if (len <= 1) {
        return true;
    }
    if (str[0] === str[len - 1]) {
        return palindrome(str.slice(1, len - 1));
    }
})('arara');

word ? console.log(`b) É palíndromo`) : console.log(`b) Não é palíndromo`);

//Tarefa c)

//Tarefa d)
var sum = (function sumDigits(num) {
    var numArr = [...num + ''].map(Number);

    function sumHelper(arr) {
        if (arr.length === 1) {
            return arr[0];
        }
        return arr.pop() + sumHelper(arr);
    }
    return sumHelper(numArr);
})(12345);

console.log(`d) ${sum}`);

//Tarefa e)
function reverseNumber(number) {
    var revNumber = 0;
    if (number == 0) {
        return number;
    } else {
        reverseNumber(Math.floor(number / 10));
        return revNumber = (revNumber * 10) + (number % 10);
    }
}
console.log(reverseNumber(123));

//Tarefa f)
// function listNumbers(x, y) {
//     if (x === y) {
//         return x;
//     }
//     if (x < y) {
//         result = listNumbers(x + 1, y);
//     }
//     return result;
// }

// var x = 1;
// var y = 3;
// var listNum = [];

// for (i = 0; i < 3; i++) {
//     listNum[i] = listNumbers(x, y);
// }

// console.log(`f) ${listNum}`);

//Tarefa g)
var maxDivisor = (function maxCommonDivisor(x, y) {
    if (x == y) {
        return x;
    }
    if (x < y) {
        return maxCommonDivisor(y, x);
    }
    return maxCommonDivisor(x - y, y);
})(48, 69);

console.log(`g) ${maxDivisor}`);

//Tarefa h)
function maxElementVector(arr, len) {
    if (len == 1) {
        return arr[0];
    }
    return Math.max(arr[len - 1], maxElementVector(arr, len - 1));
}

var arr = [19, 22, 16];
var len = arr.length;
maxElement = maxElementVector(arr, len);

console.log(`h) ${maxElement}`);

//Tarefa i)