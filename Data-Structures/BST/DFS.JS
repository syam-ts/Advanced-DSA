/**
 * ! Depth first traversal
 * !preOrder 
 * !inOrder 
 * !postOrder
 */

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
    };
    
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
    };
    
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
    
    preOrder(root) {
        if(root) {
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.val);
            this.inOrder(root.right);
        }
    };

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.val);
        }
    }
}; 


var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 9));
console.log(bst.search(bst.root, 3));
bst.preOrder(bst.root);