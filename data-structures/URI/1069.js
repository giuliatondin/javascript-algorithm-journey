var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.length === 0 ? "Empty" : this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    destroy(stack) {
        while (!stack.isEmpty()) {
            stack.pop();
        }
    }
}

var stack = new Stack();
var numTests = parseInt(lines[0]);

for (var i = 1; i <= numTests; i++) {
    var count = 0;
    var test = lines[i].split("");
    for (var j = 0; j < test.length; j++) {
        if (test[j] == "<") {
            stack.push(test[j]);
            for (var k = j + 1; k < test.length; k++) {
                if (test[k] == ">" && !stack.isEmpty()) {
                    stack.pop();
                    count++;
                } else if (test[k] == "<") {
                    break;
                }
            }
        }
    }
    console.log(count);
    stack.destroy(stack);
}