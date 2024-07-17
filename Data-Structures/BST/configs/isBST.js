/**
 * ! min(root) {
 * !     if(!root.left) {
 * !          return root.val;
 * !       } else {
 * !           return this.min(root.left);
 * !       }
 * !  };
 */


class Node{
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    };


    insert(value){
        const newNode = new Node(value);
        if(this.root === null) {
           this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    };


    insertNode(root, newNode){
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
                this.insertNode(root.right  ,newNode);
            }
        }
    };

    isBST(root) {
        let [min , max] = [null, null];
       
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
      }
     
};

const bst = new BST();
bst.insert(34);
bst.insert(12);
bst.insert(3);
bst.insert(8);
bst.insert(15);

console.log(bst.isBST(bst.root));