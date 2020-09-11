var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

class Structure {
    constructor() {
        this.items = [];
        this.itemsPriority = [];
    }

    push(element) {
        this.items.push(element);
    }

    pushPriority(element) {
        if (element == maxValue && element == minValue) {
            this.itemsPriority.push(element);
        } else if (element == maxValue) {
            this.itemsPriority.unshift(element);
        } else if (element == minValue) {
            this.itemsPriority.push(element);
        } else {
            for (var i = 0; i < this.itemsPriority.length; i++) {
                if (this.itemsPriority[i] < element) {
                    this.itemsPriority.splice(i, 0, element);
                    break;
                }
            }
        }
    }

    pop(value) {
        var shift = false,
            pop = false;
        if (value == this.items[0] && queue == 1) {
            shift = true;
        } else queue = 0;

        if (value == this.itemsPriority[0] && queuePriority == 1) {
            shift = true;
        } else queuePriority = 0;

        if (value == this.items[this.items.length - 1] && stack == 1) {
            pop = true;
        } else stack = 0;

        if (shift && pop) {
            this.itemsPriority.shift();
            this.items.pop();
        } else {
            if (shift) {
                this.itemsPriority.shift();
                this.items.shift();
            } else if (pop) {
                this.items.pop();
            }
        }
    }

    print() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }

    printPriority() {
        var str = "";
        for (var i = 0; i < this.itemsPriority.length; i++) {
            str += this.itemsPriority[i] + " ";
        }
        return str;
    }

}


var maxValue, minValue;
var stop = 0;

while (lines.length && !stop) {
    var struct = new Structure();
    var caseTest = parseInt(lines.shift());
    var queue = 1,
        queuePriority = 1,
        stack = 1;
    if (isNaN(caseTest)) {
        break;
    }
    for (var j = 0; j < caseTest; j++) {
        var aux = lines.shift();
        if (aux !== undefined) {
            test = aux.split(" ");
        } else {
            stop = 1;
            break;
        }
        if (j === 0) {
            maxValue = parseInt(test[1]);
            minValue = parseInt(test[1]);
        } else {
            if (maxValue < test[1]) {
                maxValue = parseInt(test[1]);
            } else if (minValue > test[1]) {
                minValue = parseInt(test[1]);
            }
        }

        if (test[0] == 1) {
            struct.push(test[1]);
            struct.pushPriority(test[1]);
        } else {
            struct.pop(test[1]);
        }
    }

    if ((queue == 1 && queuePriority == 1) || (queue == 1 && stack == 1) || (queuePriority == 1 && stack == 1)) {
        console.log("not sure");
    } else if (queue) console.log("queue");
    else if (queuePriority) console.log("priority queue");
    else if (stack) console.log("stack");
    else console.log("impossible");
}