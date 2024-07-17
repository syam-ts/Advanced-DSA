/**
 * ! max(root) {
 * !     if(!root.right) {
 * !          return root.val;
 * !       } else {
 * !           return this.max(root.right);
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

    max(root) {
       if(!root.right) {
         return root.val;
       } else {
        return this.max(root.right);
       }
    }

};

const bst = new BST();
bst.insert(34);
bst.insert(12);
bst.insert(3);
bst.insert(8);
bst.insert(15);

console.log('Max Value is : ',bst.max(bst.root));