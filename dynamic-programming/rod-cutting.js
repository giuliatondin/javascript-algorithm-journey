/* Author: Giulia Tondin Monteiro */

// versão recursiva                                                                                                                        
function recCutRod(prices, length) {
    if (length === 0) return 0;
    var q = -1;
    for (var i = 1; i < length; i++) {
        q = Math.max(q, prices[i] + recCutRod(prices, length - i - 1));
    }
    return q;
}

// versão recursiva com memoização
function memoizedCutRod(prices, length) {
    var rm = [0];
    for (var i = 1; i <= length; i++) rm[i] = -1;
    return memoizedCutRodAux(prices, length, rm);
}

function memoizedCutRodAux(prices, length, rm) {
    if (length === 0) return 0;
    var q = -1;
    if (rm[length] >= 0) return rm[length];
    else {
        for (var i = 1; i < length; i++) {
            q = Math.max(q, prices[i] + memoizedCutRodAux(prices, length - i - 1, rm));
        }
    }
    return q;
}

// versão programação dinâmica                                                                                                                  
function dynCutRod(prices, length) {
    var max = [0];
    for (let i = 1; i <= length; i++) {
        var ps = prices.slice(0, i);
        var all = ps.map((p, l) => p + max[i - l - 1]);
        max[i] = Math.max(...all);
    }
    return max[length];
}

function fillArray(prices, size) {
    for (var i = 0; i < size; i++) {
        prices[i] = ((i + 1) * 2);
    }
}

// Exercício 1
// O algoritmo de corte utilizando recursão para de responder ou demora muito tempo para retornar 
// em um tamanho acima de 55
var size = 55;
var prices = [];
fillArray(prices, size); // todos os prices sao múltiplos de 2 para teste

console.log("Exercício 1:");
console.log(`Tamanho ${size}: ${recCutRod(prices, size)}`);

// Exercício 2
console.log("Exercício 2:");
var prices = [1, 5, 8, 9, 10, 17, 17, 20];
var size = 4;
console.log(`Máxima receita para hastes de comprimento ${size} de modo din é ${dynCutRod(prices, size)}`);