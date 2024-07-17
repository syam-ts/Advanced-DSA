const postOrder = (root) => {
    if(root) {
        this.inOrder(root.left);
        this.inOrder(root.right);
        console.log(root.val);
    }
};