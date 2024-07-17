/**
 * ! Breadth first traversal
 * !levelOrder 
 */

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
    }
    
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
    }
    
    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.val);
            if(curr.left) {
                queue.push(curr.left)
            }if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}; 


const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);



console.log(bst.search(bst.root, 12))
console.log(bst.search(bst.root, 7))
console.log(bst.search(bst.root, 32))
console.log(bst.search(bst.root, 3))
console.log(bst.search(bst.root, 9))

bst.levelOrder();

// 3
// 7
// 5
// 15
// 10