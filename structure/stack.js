class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.isEmpty ? "Underflow" : this.items.pop();
    }
    isEmpty() {
        return this.items.length == 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}


var stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());

console.log(stack.pop());

console.log(stack.printStack());