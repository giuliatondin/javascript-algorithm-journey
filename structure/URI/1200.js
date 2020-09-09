var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        var aux1 = newNode.data;
        aux1 = aux1.toLowerCase();
        var aux2 = node.data;
        aux2 = aux2.toLowerCase();
        if (aux1 < aux2) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node, data) {
        if (node === null) {
            return 0;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return 1;
        }
    }

    getRootNode() {
        return this.root;
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            if (pos === 0) {
                process.stdout.write(node.data);
                pos = 1;
            } else {
                process.stdout.write(" " + node.data);
            }
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node !== null) {
            if (pos === 0) {
                process.stdout.write(node.data);
                pos = 1;
            } else {
                process.stdout.write(" " + node.data);
            }
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            if (pos === 0) {
                process.stdout.write(node.data);
                pos = 1;
            } else {
                process.stdout.write(" " + node.data);
            }
        }
    }
}

var bin = new BinaryTree();
var root, pos;
var operation = [];

for (var i = 0; lines[i] !== undefined; i++) {
    operation = lines[i];
    root = bin.getRootNode();
    pos = 0;
    if (operation[0] == "I") {
        if (operation[1] != " " && operation[2] == "F") {
            bin.inorder(root);
            console.log("");
        } else {
            bin.insert(operation[2]);
        }
    } else if (operation[0] == "P") {
        if (operation[1] != ' ' && operation[2] == 'E') {
            bin.preorder(root);
            console.log("");
        } else if (operation[1] != ' ' && operation [2] == 'S') {
            bin.postorder(root);
            console.log("");
        } else {
            if (bin.search(root, operation[2])) {
                console.log(operation[2] + ' existe');
            } else {
                console.log(operation[2] + ' nao existe');
            }

        }
    }
}

console.log("");