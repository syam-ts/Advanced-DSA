class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    constructor(value: number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root: Node | null;
    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(root: Node, newNode: Node): void {
        if (newNode.val < root.val) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }


    min(root: Node | null): number | null {
        if (!root) {
            return null;
        }
        if (!root.left) {
            return root.val;
        } else {
            return this.max(root.left);
        }
    }
}

const bst = new BST();
bst.insert(7);
bst.insert(12);
bst.insert(3);
bst.insert(9);

console.log(bst.max(bst.root));
