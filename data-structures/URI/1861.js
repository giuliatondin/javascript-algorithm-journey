var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.length == 0 ? "Underflow" : this.items.pop();
    }
    isEmpty() {
        return this.items.length == 0;
    }
}

var stackKillers = new Stack();
var finalList = [];
var arrMurdered = [];

var murders = lines.length;

for (var i = 0; i < murders; i++) {
    var list = lines.shift().split(" ");
    if (list.length === 0) {
        break;
    }
    var killer = list[0];
    var murdered = list[1];
    stackKillers.push(killer);
    arrMurdered.push(murdered);
}

while (!stackKillers.isEmpty()) {
    var aux = stackKillers.pop();
    var alive = true;
    for (j = 0; j < arrMurdered.length; j++) {
        if (aux == arrMurdered[j]) {
            alive = false;
            break;
        }
    }
    if (alive) {
        finalList.push(aux);
    }
}

finalList.sort();

console.log("HALL OF MURDERERS");
for (i = 0; i < finalList.length; i++) {
    var counter = 1;
    if (finalList[i].length > 0) {
        for (j = i + 1; j < finalList.length; j++) {
            if (finalList[i] == finalList[j]) {
                finalList.splice(j, 1);
                j--;
                ++counter;
            }
        }
        console.log(`${finalList[i]} ${counter}`);
    }
}