class Node {
    constructor() {
      this.children = {};
      this.endWord = false;
    }
  }
  class Trie {
    constructor() {
      this.root = new Node();
    }


    insert(word) {
      let currentNode = this.root;
      for (let char of word) {
        if (!currentNode.children[char]) {
          currentNode.children[char] = new Node();
        }
        currentNode = currentNode.children[char];
      }
      currentNode.endWord = true;
    }


    search(word) {
      let currentNode = this.root;
      for (let char of word) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return (currentNode.endWord = true);
    }


 


    autoComplete(word) {
      let currentNode = this.root;
      for (let char of word) {
        if (!currentNode.child[char]) {
          return [];
        }
        currentNode = currentNode.child[char];
      }
    };


    

    display() {
        for (let i = 0; i < this.root.length; i++) {
           console.log(this.root.val)
        }
    };


    remove(word) {
      let curr = this.rootNode;
      const branch = [curr];
    
      for (let char of word) {
        curr = curr.children[char];
        branch.push(curr);
      }
    
      curr.endWith = false;
    
      for (let i = branch.length - 2; i >= 0; i--) {
        const j = i + 1;
        if (!Object.keys(branch[j].children).length) {
          delete branch[i].children[branch[j].val];
        }
      }
    
      return null;
    }
  };

  const trie = new Trie();
