const preOrder = (root) => {
    if(root) {
        console.log(root.val);
        this.inOrder(root.left);
        this.inOrder(root.right);
    }
};