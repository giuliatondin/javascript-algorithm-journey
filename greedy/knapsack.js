// Author: Giulia Tondin Monteiro 

// 1) Modifique o algoritmo da mochila fracionária, para que este trabalho com vetores desorganizados

// Array desorganizado: precisa organizar para realizar de forma descendente o algoritmo
var item = [
    [20, 400],
    [10, 100],
    [40, 840],
    [20, 300],
    [30, 600]
];

var capacity = 50;

function knapsack(capacity, item) {
    var total = 0;
    var curWeight = 0;
    item.sort().reverse();
    for (var i = 0; i < item.length; i++) {
        var weight = item[i].shift();
        var value = item[i].shift();
        if (curWeight + weight <= capacity) {
            curWeight += weight;
            total += value;
        } else {
            var remain = capacity - curWeight;
            total += value * (remain / weight);
            break;
        }
    }
    return total;
}

console.log(`Valor máximo da mochila fracionária = ${knapsack(capacity, item)}`);