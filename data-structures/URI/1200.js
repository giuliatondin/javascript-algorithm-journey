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
        if (newNode.data < node.data) {
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
            console.log(`${data} nao existe`);
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            console.log(`${data} existe`);
            return node;
        }
    }

    getRootNode() {
        return this.root;
    }

    //Tree traversal
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
var numOp = lines.length;

for (var i = 0; i < numOp; i++) {
    operation = lines.shift();
    if (operation.length === 0) {
        break;
    }
    pos = 0;
    if (operation[0] === "I") {
        if (operation[1] == "N") {
            root = bin.getRootNode();
            bin.inorder(root);
            console.log("");
        } else {
            bin.insert(operation[2]);
        }
    } else if (operation[0] == "P") {
        if (operation[1] == "R") {
            root = bin.getRootNode();
            bin.preorder(root);
            console.log("");
        } else if (operation[1] == "O") {
            root = bin.getRootNode();
            bin.postorder(root);
            console.log("");
        } else {
            root = bin.getRootNode();
            bin.search(root, operation[2]);
        }
    }
}