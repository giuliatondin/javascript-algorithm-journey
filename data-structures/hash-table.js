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
        for (let i = 0; i < this.container[hashCode].length; i++) {
            if (this.container[hashCode][i].key === key) {
                this.container[hashCode][i].value = value;
                return;
            }
        }
        this.container[hashCode].push(new this.KVPair(key, value));
    }

    get(key) {
        let hashCode = this.hash(key);
        for (let i = 0; i < this.container[hashCode].length; i++) {
            if (this.container[hashCode][i].key === key) {
                return this.container[hashCode][i];
            }
        }
        return undefined;
    }

    remove(key) {
        let hashCode = this.hash(key);
        for (let i = 0; i < this.container[hashCode].length; i++) {
            if (this.container[hashCode][i].key === key) {
                this.container[hashCode].splice(i, 1);
                return true;
            }
        }
        return false;
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

var ht = new HashTable(13);

ht.put(44, 44);
ht.put(45, 45);
ht.put(27, 27);
ht.put(70, 70);

ht.display();