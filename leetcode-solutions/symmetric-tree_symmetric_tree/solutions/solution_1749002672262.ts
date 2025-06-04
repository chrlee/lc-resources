 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    const traverse = (i: TreeNode | null, j: TreeNode | null) => {
        if(!i && !j) return true;
    }
        return i?.val === j?.val && traverse(i?.left, j?.right) && traverse(i?.right, j?.left);
    if(!root) return true;
    return traverse(root.left, root.right)
};