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
}

var stack = new Stack();

for (var i = 0; lines[i] !== undefined; i++) {
    var expression = lines[i].split("");
    var parRight = 0;
    var parLeft = 0;
    var count = 0;
    if (expression[0] == ")" || expression[expression.length - 1] == "(") {
        parRight++;
    } else {
        for (var j = 0; j < expression.length; j++) {
            if (expression[j] == '(') {
                stack.push(expression[j]);
                parRight++;
                count++;
                for (var k = j + 1; k < expression.length; k++) {
                    if (expression[k] == ")") {
                        parLeft++;
                        count--;
                        if (!stack.isEmpty()) {
                            stack.pop();
                        }
                    } else if (expression[k] == "(") {
                        break;
                    }
                }
            }
        }
    }
    if (count == 0 && parRight == parLeft) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}