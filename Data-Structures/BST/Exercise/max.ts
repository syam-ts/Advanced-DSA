
    max(root: Node | null): number | null {
        if (!root) {
            return null; 
        }
        if (!root.right) {
            return root.val;
        } else {
            return this.max(root.right);
        }
    }



console.log(bst.max(bst.root))