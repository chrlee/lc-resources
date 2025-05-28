        const curr = q.shift();
        cols.set(curr[1], [...(cols.get(curr[1]) ?? []), curr[0]?.val]);
    while(q.length){
    const q: [TreeNode, number][] = [[root, 0]];
        if(curr[0]?.left){
            q.push([curr[0].left, curr[1]-1]);
        }
        if(curr[0]?.right){
            q.push([curr[0].right, curr[1]+1]);
        }
    }
    return [...cols.entries()].sort((a,b) => a[0] - b[0]).map((x) => x[1]);
    const cols = new Map<number, number[]>();
    if(!root) return []
function verticalOrder(root: TreeNode | null): number[][] {

 */
};