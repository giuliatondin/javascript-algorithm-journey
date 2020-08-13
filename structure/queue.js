class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.isEmpty() ? "Underflow" : this.items.shift();
    }
    firstElement() {
        return this.isEmpty() ? "No elements" : this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

var queue = new Queue();

console.log(queue.dequeue());
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue());

console.log(queue.firstElement());