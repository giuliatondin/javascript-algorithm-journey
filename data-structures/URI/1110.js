var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

class Stack {
    constructor() {
        this.items = [];
        this.qtd = 0;
    }
    push(element) {
        this.items.push(element);
        this.qtd++;
    }
    pop() {
        if (this.items.length === 0) {
            return "Empty";
        } else {
            var aux = this.peek();
            this.items.pop();
            this.qtd--;
            return aux;
        }
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    moveValues(stack1, stack2) {
        while (!stack1.isEmpty()) {
            var aux = stack1.pop();
            stack2.push(aux);
        }
    }
}

var stack1 = new Stack();
var stack2 = new Stack();

for (var i = 0; lines[i] !== undefined; i++) {
    if (lines[i] <= 50 && lines[i] != 0) {
        var discards = [];
        var cards = parseInt(lines[i]);
        while (cards) {
            stack1.push(cards);
            cards--;
        }
        while (stack1.qtd > 1) {
            discards.push(stack1.pop());
            var base = stack1.pop();
            stack1.moveValues(stack1, stack2);
            stack1.push(base);
            stack2.moveValues(stack2, stack1);
        }
        var list = discards.join(', ');
        console.log(`Discarded cards: ${list}`);
        console.log(`Remaining card: ${stack1.pop()}`);
    }
}