
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const node = this._searchNode(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._searchNode(prefix) !== null;
    }

    _searchNode(str) {
        let node = this.root;
        for (let char of str) {
            if (!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }
}


const operations = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
const inputs = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
const output = [];

let trie;

for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = inputs[i];

    if (op === "Trie") {
        trie = new Trie();
        output.push(null);
    } else if (op === "insert") {
        trie.insert(arg[0]);
        output.push(null);
    } else if (op === "search") {
        output.push(trie.search(arg[0]));
    } else if (op === "startsWith") {
        output.push(trie.startsWith(arg[0]));
    }
}

console.log("Output:", output);
