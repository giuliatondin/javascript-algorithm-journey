/* Author: Giulia Tondin Monteiro */

// 2) O algoritmo do problema do troco funcionaria para moedas nos valores 0,06, 0,04 e 0,01? Sim.

function sort(coins) {
    for (var i = 0; i < coins.length; i++) {
        if (coins[i] < coins[i + 1]) {
            var aux = coins[i];
            coins[i] = coins[i + 1];
            coins[i + 1] = aux;
        }
    }
}

function findMin(coins, value) {
    sort(coins); //ordena decrescente
    var count = 0;
    for (var i = 0; i < coins.length; i++) {
        while (value >= coins[i]) {
            value -= coins[i];
            change[count] = coins[i];
            count++;
        }
        if (value == 0) break;
    }
    return count;
}

// Moedas para troco
var coins = [0.50, 0.25, 0.10, 0.05, 0.06, 0.04, 0.01];

// Primeiro Teste
var change = []; // Vetor para armazenar troco
var value = 0.01; // Valor para troco
var result = findMin(coins, value);
console.log(`Você precisa de ${result} moeda(s), sendo ela(s): ${change}`);

// Novo teste
change = [];
value = 0.04;
var result = findMin(coins, value);
console.log(`Você precisa de ${result} moeda(s), sendo ela(s): ${change}`);

// Novo teste
change = [];
value = 0.08;
var result = findMin(coins, value);
console.log(`Você precisa de ${result} moeda(s), sendo ela(s): ${change}`);


// Novo teste
change = [];
value = 0.53;
var result = findMin(coins, value);
console.log(`Você precisa de ${result} moeda(s), sendo ela(s): ${change}`);