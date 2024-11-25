class Node {
    constructor() {
      this.children = {};
      this.endWord = false;
    }
  };
  
  class Trie {
    constructor() {
      this.root = new Node();
    };
  

    insert(word) {
      let curr = this.root;
      for(let char of word) {
        if(!curr.children[char]) {
            curr.children[char] = new Node();
        }
        curr = curr.children[char];
      }
      curr.endWord = true;
    }
  
    search(word) {
      let curr = this.root;
      for(let char of word) {
         if(!curr.children[char]) {
           return false;
         }
         curr = curr.children[char];
      }
      return (curr.endWord = true)
    }
  
    display() {
      function traverse(node, prefix) {
        if (node.endWord) {
          console.log(prefix);
        }
        for (let char in node.children) 
          traverse(node.children[char], prefix + char);
      }
      traverse(this.root, "");
    };
  
    
    //  longestPrefix(word) {
    //    let curr = this.root;
    //    let prefix = "";
    //    for(let char of word) {
    //      if(!curr.children[char]) {
    //        return prefix;
    //      }
    //      prefix += char;
    //      curr = curr.children[char];
    //      if(curr.endWord) {
    //        prefix = word.substring(0, prefix.length);
    //      }
    //    }
    //    return prefix
    //  }
  
  
    autoComplete(word) {
      let currentNode = this.root;
      let prefix = '';
      for (let char of word) {
        if (!currentNode.children[char]) {
          return [];
        }
        prefix += char;
        currentNode = currentNode.children[char];
      }
      let words = [];
      function collectWords(node, prefix) {
        if (node.endWord) {
          words.push(prefix);
        }
        for (let char in node.children) {
          collectWords(node.children[char], prefix + char);
        }
      }
      collectWords(currentNode, prefix);
      return words;
    }

    remove(word) {
      let curr = this.root;
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
    };
  }
  
  const t = new Trie();
  t.insert('hai');
  t.insert('hello');
  t.insert('eai');
  t.insert('hellothere');
  
  console.log(t.remove('hai'))
  
  