/**
 *  ? Prefix Trie <---
 * *  A prefix is any part of a word that comes at the beginning.
 * * Inserting a word means inserting all of its prefixes.
 * * For example, inserting the word "cat" will result in the prefixes: 
 * !  "c", "ca", and "cat"  
 * 
 * ? Suffix Trie <----
 * * A suffix is any part of the string that starts at any position and extends to the end.
 * * Inserting a string means inserting all possible suffixes.
 * * For example, for the string "banana", its suffixes are:
 * !  "banana", "anana", "nana", "ana", "na", and "a".  
 */ 

// Trie implementation
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
  
    // first method to display
    // display() {
    //   function traverse(node, prefix) {
    //     if (node.endWord) {
    //       console.log(prefix);
    //     }
    //     for (let char in node.children) 
    //       traverse(node.children[char], prefix + char);
    //   }
    //   traverse(this.root, "");
    // };
  
    
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

   // second method to display
    display() {
      console.log(JSON.stringify(this.root, null, 2));
    }
  
  
    autoComplete(prefix) {
      let node = this.root;
   
      for (let char of prefix) {
        if (!node.children[char]) {
          return [];  
        }
        node = node.children[char];
      }
   
      const words = [];
      const dfs = (currentNode, currentWord) => {
        if (currentNode.endWord) {
          words.push(currentWord);
        }
        for (let char in currentNode.children) {
          dfs(currentNode.children[char], currentWord + char);
        }
      };
  
      dfs(node, prefix);
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
  t.insert('eat');
 
  console.log( t.autoComplete('h'))  
  
 