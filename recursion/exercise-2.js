// Author: Giulia Tondin Monteiro

//Tarefa a)
var product = (function product(a, b) {
    return b == 0 || a == 0 ? 0 : a + product(a, --b);
})(2, 5);

console.log(`a) ${product}`);

//Tarefa b) 
function palindrome(str) {
    var len = str.length;
    if (len <= 1) {
        return true;
    }
    if (str[0] === str[len - 1]) {
        return palindrome(str.slice(1, len - 1));
    }
}

var word = 'Arara';
var check = palindrome(word.toLowerCase());

check ? console.log(`b) ${word} é palíndromo`) : console.log(`b) ${word} não é palíndromo`);

//Tarefa c)
function charCounter(word, char, count) {
    if (word.length == 0) {
        return count;
    } else {
        if (word[0] == char) {
            count += 1;
        }
        counter = charCounter(word.slice(1), char, count);
    }
    return counter;
}

var word = 'Arara';
var char = 'a';
var counter = charCounter(word.toLowerCase(), char.toLowerCase(), 0);

console.log(`c) A palavra ${word} tem ${counter} letra(s) ${char}`);

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
function reverseNum(num) {
    return (
        parseFloat(
            num
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
    )
}

console.log(`e) ${reverseNum(123)}`);

//Tarefa f)
function listNumbers(a, b) {
    if (a < b) {
        prox = +1;
    } else {
        prox = -1;
    }
    if (a == b) {
        list.push(a);
        return;
    } else {
        list.push(a);
    }
    listNumbers(a + prox, b);
}

var list = [];
var a = 10,
    b = 5;
listNumbers(a, b);

console.log(`f) Lista de ${a} até ${b}: ${list}`);

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
function searchElement(arr, first, last, number) {
    if (last < first) return -1;
    if (arr[first] == number) return first;
    if (arr[last] == number) return last;
    return searchElement(arr, first + 1, last - 1, number);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 2^3 = 8
var size = arr.length;
var number = 6;
console.log(`i) Posição do elemento ${number} no array: ${searchElement(arr, 0, size - 1, number)}`);