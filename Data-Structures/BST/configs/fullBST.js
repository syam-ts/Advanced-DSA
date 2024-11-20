

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
};

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;  
    } else {
      this.insertNode(this.root , newNode);
    }
  }

  insertNode(root, newNode) {
  if(newNode.val < root.val) {
    if(root.left === null) {
      root.left = newNode;
    } else {
      this.insertNode(root.left, newNode)
    }
  } else {
    if(newNode.val > root.val) {
      root.right = newNode;
    } else {
      this.insertNode(root.right, newNode);
    }
  }
    }

    search(root, value) {
     if(!root) {
       return false;
     }
     if(root.val == value) {
       return true;
     }
     else if(value < root.val) {
       return this.search(root.left, value);
    } else if(value > root.val) {
      return this.search(root.right, value);
    }
    }

    preOrder(root) {
      if(root) {
        console.log(root.val);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }


    inOrder(root) {
      if(root) {
        this.inOrder(root.left);
        console.log(root.val);
        this.inOrder(root.right);
      }
    }

    postOrder(root) {
      if(root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.val);
      }
    }

    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }

      deleteNode(root, value) {
        if(root === null) {
          return root;
        }
        if(value < root.val) {
          root.left = this.deleteNode(root.left, value);
        } else if(value > root.val) {
          root.right = this.deleteNode(root.right, value);
        } else {
          if(!root.left && !root.right) {
            return null;
          }
          if(!root.left) {
            return root.right;
          } else if(!root.right) {
            return root.left;
          }
          root.val = this.min(root.right);
          root.right = this.deleteNode(root.right, root.val);
        }
        return root;
      }

       
    min(root) {
      if(!root.left) {
        return root.val;
      } else {
        return this.min(root.left);
      }
    } 

    max(root) {
      if(!root.right) {
        return root.val;
      } else {
        return this.max(root.right);
      }
    }
     height = (root) => {
      if(!root) {
          return false;
      }
      let leftHeight = this.height(root.left);
      let rightHeight = this.height(root.right);
       return Math.max(leftHeight, rightHeight) + 1;
  };
  

    isBST(root,min = null, max = null) {
         
      if (!root) {
        return true;
      } else {
        if ((min != null && root.value <= min) || (max != null && root.value >= max)) {
          return false;
        } 
        return this.isBST(root.left, min, root.val) && this.isBST(root.right, root.val, max)
      }
    }
    
};


const bst = new binarySearchTree();

bst.insert(34);
bst.insert(12);
bst.insert(24);
bst.insert(47);
bst.insert(4);

// bst.delete(12);
// bst.delete(24);
// bst.delete(4);
// bst.delete(34);
bst.inOrder(bst.root);



