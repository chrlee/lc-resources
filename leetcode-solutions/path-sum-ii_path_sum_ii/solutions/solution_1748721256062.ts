        const curr = s.pop();
        if(curr[2] === targetSum && !curr[1].left && !curr[1].right){
    while(s.length) {
    const s: [number[], TreeNode, number][] = [[[root.val], root, root.val]];
    if(!root) return out;
    const out = [];
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
            out.push(curr[0]);
            continue;
        }
        if(curr[1].right){
            s.push([[...curr[0], curr[1].right.val], curr[1].right, curr[2]+curr[1].right.val])
        }
        if(curr[1].left){
            s.push([[...curr[0], curr[1].left.val], curr[1].left, curr[2]+curr[1].left.val])
        }
    }
    return out;