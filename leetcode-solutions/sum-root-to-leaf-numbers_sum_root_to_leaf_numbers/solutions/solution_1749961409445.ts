        if(!node.left && !node.right){
            numbers.push(+(path.join('')));
            return;
        }
        if(node.left){
            helper(node.left, path.concat(node.left.val.toString()));
        }
        if(node.right){
            helper(node.right, path.concat(node.right.val.toString()));
        }
    }
    helper(root, [root.val.toString()]);
    const helper = (node: TreeNode, path: string[]) => {
    if(!root) return 0;
    return numbers.reduce((acc, curr) => acc+curr, 0);
};