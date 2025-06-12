class Node{
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        }else{
       this.insertNode(this.root, newNode);
        }
    };
    
    insertNode(root, newNode) {
        if(newNode.val < root.val) {
            if(root.left === null) {
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
             if(root.right === null) {
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }
    
    search(root, value) {
        if(!root) {
            return false;
             }
        if(root.val === value){
            return true;
        }else if(value < root.val){
            return this.search(root.left, value);
        }else{
            return this.search(root.right, value);
        }
    };




      height(root) {
        if (!root) {
          return 0;
        }
        return 1 + Math.max(this.height(root.left), this.height(root.right));
      }
      
      
      
      
      
      findTheClosestValue(root, target) {
        let closest = root.val;
        while (root !== null) {
          if (Math.abs(target - closest) > Math.abs(target - root.val)) {
            closest = root.val;
          }
          if (target < root.val) {
            root = root.left;
          } else if (target > root.val) {
            root = root.right;
          } else {
            break;
          }
        }
        return closest;
      }
};


var bst = new BinarySearchTree();
bst.insert(7);
bst.insert(12);
bst.insert(3);
bst.insert(9);

console.log(bst.search(bst.root, 12));
console.log(bst.search(bst.root, 7));
console.log(bst.search(bst.root, 32));
console.log(bst.search(bst.root, 3));
console.log(bst.search(bst.root, 9));
console.log('Is this:', bst.isBalanced(bst.root))