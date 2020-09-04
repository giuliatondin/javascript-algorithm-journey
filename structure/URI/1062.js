var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

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
    destroy(stack) {
        while (!stack.isEmpty()) {
            stack.pop();
        }
    }
    reverse(stack){
        var aux = [];
        var qtd = stack.qtd;
        for(i = 0; i < qtd; i++){
            aux[i] = stack.pop();
        }
        for(i = 0; i < qtd; i++){
            stack.push(aux[i]);
        }
    }
}

var stack1 = new Stack();
var stack2 = new Stack();
var exit, stop = 0;
var caseTest;

while(!stop){
    var qt = lines.shift();
    if(qt == 0){
        exit = 1;
        stop = 1;
    } else if (qt > 1000 || qt < 1){
        sair = 0;
    }else {
        exit = 0;
    }
    while(!exit){
        var pos = 0;
        var ln = lines.shift();
        if (ln == undefined) {
            exit = 1;
            sair = 1;
        } else {
            var caseTest = ln.split(' ');
            if(caseTest[0] == 0){
                exit = 1;
                console.log("");
                break;
            } else {
                for(i = 0; i < qt; i++){ 
                    stack1.push(caseTest[i]);
                }
            }
            if(!exit){
                stack1.reverse(stack1);
                var correct = 1;
                for(i = 1; i <= qt; i++){
                    stack2.push(i);
                    while(stack1.peek() == stack2.peek()){
                        stack1.pop();
                        stack2.pop();
                        if(stack1.isEmpty() || stack2.isEmpty()){
                            break;
                        }
                    }
                }
                if(!stack1.isEmpty() && !stack2.isEmpty()){
                    correct = 0;
                }
                if(correct){
                    console.log(`Yes`);
                } else {
                    console.log(`No`);
                }
                stack1.destroy(stack1);
                stack2.destroy(stack2);
            }
        }
    }
}