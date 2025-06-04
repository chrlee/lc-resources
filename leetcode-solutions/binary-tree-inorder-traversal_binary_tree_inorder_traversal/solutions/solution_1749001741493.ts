 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
    const out = [];
    const traverse = (node: TreeNode | null) => {
        if(node.left) traverse(node.left);
    }
        out.push(node.val);
        if(node.right) traverse(node.right);
    traverse(root);
    return out;
    if (!root) return out;
};