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
        if (this.items.length === 0) {
            return "Empty";
        } else {
            var aux = this.peek();
            this.items.pop();
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
var letters = ['F', 'A', 'C', 'E'];
var numTests = parseInt(lines.shift());
var count = 0;

for (i = 0; i < numTests; i++) {
    var ln = lines.shift();
    if(ln !== undefined) {
        var caseTest = ln.split(' ');
        var equal = 0;
        if (stack1.isEmpty()) {
            for (j = 0; j < letters.length; j++) {
                stack1.push(letters[j]);
            }
        }
        for (j = 0; j < 4; j++) {
            var aux = stack1.pop();
            if (caseTest[j] == aux) {
                stack2.push(aux);
                equal++;
            } else {
                break;
            }
        }
        if (equal == 4) {
            count++;
            while (!stack2.isEmpty()) {
                stack2.pop();
            }
        } else {
            stack1.push(aux);
            stack2.moveValues(stack2, stack1);
            for (j = 0; j < 4; j++) {
                stack1.push(caseTest[j]);
            }
        }
    }
}

console.log(count);