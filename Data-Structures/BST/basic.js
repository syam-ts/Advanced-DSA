class Node{
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
};

class BST{
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




    isBalanced(root) {
        if (!root) {
          return false;
        }
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        let HeightDiff = Math.abs(leftHeight, rightHeight) <= 1;
        return (
          HeightDiff && this.isBalanced(root.left) && this.isBalanced(root.right)
        );
      }
      
      
      isBST(root, min = null, max = null) {
        if (!root) {
          return true;
        } else {
          if (
            (min != null && root.value <= min) ||
            (max != null && root.value >= max)
          ) {
            return false;
          }
          return this.isBST(root.left, min, root.val) && this.isBST(root.right, min, root.val)
        }
      };
      
      
      findTheClosestValue(root, target) {
        let closest = root.value;
        while (root !== null) {
          if (Math.abs(target - closest) > Math.abs(target - root.value)) {
            closest = root.value;
          }
          if (target < root.value) {
            root = root.left;
          } else if (target > root.value) {
            root = root.right;
          } else {
            break;
          }
        }
        return closest
      };
};


const bst = new BST();
bst.insert(7);
bst.insert(12);
bst.insert(3);
bst.insert(9);

console.log(bst.search(bst.root, 12));
console.log(bst.search(bst.root, 7));
console.log(bst.search(bst.root, 32));
console.log(bst.search(bst.root, 3));
console.log(bst.search(bst.root, 9));