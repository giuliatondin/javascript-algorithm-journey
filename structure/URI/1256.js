var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

class HashTable {
    constructor(hash) {
        this.hashPrime = hash;
        this.container = [];
        for (let i = 0; i < this.hashPrime; i++) {
            this.container.push([]);
        }
    }

    display() {
        this.container.forEach((value, index) => {            
            let chain = value
                .map(({ key }) => `${key} -> `)
                .join("");
            console.log(`${index} -> ${chain}\\`);
        });
    }

    put(key, value) {
        let hashCode = this.hash(key);
        this.container[hashCode].push(new this.KVPair(key, value));
    }

    hash(key) {
        return key % this.hashPrime;
    }

    forEach(callback) {
        this.container.forEach(elem => {
            elem.forEach(({ key, value }) => callback(key, value));
        });
    }

    static join(table1, table2) {
        let combo = new HashTable();
        table1.forEach((k, v) => combo.put(k, v));
        table2.forEach((k, v) => combo.put(k, v));
        return combo;
    }
}

HashTable.prototype.KVPair = class {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
};

var caseTests = parseInt(lines.shift());
var keys = [];

for(var i = 0; i < caseTests; i++){
    var test = lines.shift().split(" ");
    var hash = parseInt(test.shift());
    var numKeys = parseInt(test.shift());
    var keys = lines.shift().split(" ");
    var ht = new HashTable(hash);

    for(var j = 0; j < numKeys; j++) {
        ht.put(keys[j], keys[j]);
    }

    ht.display();
    if(i < caseTests - 1) {
        console.log("");
    }
}
