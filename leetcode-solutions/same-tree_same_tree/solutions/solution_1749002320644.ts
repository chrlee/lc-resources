 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let [left, right] = [p?.left === null && q?.left === null, p?.right === null && q?.right === null]
    if(p?.left && q?.left){
        left = isSameTree(p.left, q.left);
    }
    if(p?.right && q?.right){
        right = isSameTree(p.right, q.right);
    }
    return p?.val === q?.val && left && right;
    if(!p && !q) return true;