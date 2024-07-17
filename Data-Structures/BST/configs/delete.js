/**
* ! delete(value) {
* !   this.root = this.deleteNode(this.root, value);
* ! };

* ! deleteNode(root, value) {
    * !   if(root === null) {
    * !  return root;
    * !   }
    * !   if(value < root.val) {
    * !  root.left = this.deleteNode(root.left, value);
    * !   } else if(value > root.val) {
    * !  root.right = this.deleteNode(root.right, value);
    * !   } else {
       * !  if(!root.left && !root.right ) {
       * ! return null;
    * !  } 
    * !  if(!root.left) {
    * ! return root.right;
    * !  } else if(!root.right) {
    * ! return root.left;
    * !  }
* !  root.val = this.min(root.right);
* !  root.right = this.deleteNode(root.right, root.val);
* !   }
* !   return root;
* ! };
 */
// delte nodes in bst is simple until you not understand!

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

    min(root) {
        if(!root.left) {
            return root.val;
        } else {
            return this.min(root.left);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    };

    deleteNode(root, value) {
        if(root === null) {
            return root;
        }
        if(value < root.val) {
            root.left = this.deleteNode(root.left, value);
        } else if(value > root.val) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right ) {
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

    preOrder(root) {
        if(root){
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    } 
};

const bst = new BST();
bst.insert(34);
bst.insert(12);
bst.insert(3);
bst.insert(8);
bst.insert(15);

bst.preOrder(bst.root);
// console.log("After : ")
// bst.delete(3);
// bst.preOrder(bst.root);

