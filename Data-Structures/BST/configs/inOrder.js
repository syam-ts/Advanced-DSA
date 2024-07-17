const inOrder = (root) => {
    if(root) {
        this.inOrder(root.left);
        console.log(root.val);
        this.inOrder(root.right);
    }
};