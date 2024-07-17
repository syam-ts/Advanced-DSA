const height = (root) => {
    if(!root) {
        return false;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
     return Math.max(leftHeight, rightHeight) + 1;
};
