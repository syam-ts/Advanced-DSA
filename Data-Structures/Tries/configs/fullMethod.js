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

    searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }
}

class AutocompleteSystem {
    constructor() {
        this.trie = new Trie();
    }

    insert(word) {
        this.trie.insert(word);
    }

    autocomplete(prefix) {
        const result = [];
        const node = this.trie.searchPrefix(prefix);

        if (node) {
            this.dfs(node, prefix, result);
        }

        return result;
    }

    dfs(node, prefix, result) {
        if (node.isEndOfWord) {
            result.push(prefix);
        }
        for (const char in node.children) {
            this.dfs(node.children[char], prefix + char, result);
        }
    }
    collection(node, word, list) {
        if (node.endWord) {
          list.push(word);
        }
        for (let char in node.children) {
          this.collection(node.children[char], word + char, list);
        }
      }
}

 
const autocompleteSystem = new AutocompleteSystem();
autocompleteSystem.insert("dog");
autocompleteSystem.insert("deer");
autocompleteSystem.insert("deal");
console.log(autocompleteSystem.autocomplete("de"));  
