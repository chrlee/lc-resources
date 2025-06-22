 */
var lowestCommonAncestor = function(p, q) {
    const pParents = new Set();
    let pWalker = p;
    let qWalker = q;
    while(pWalker){
        pParents.add(pWalker);
        pWalker = pWalker.parent;
    }
    while(qWalker){
        qWalker = qWalker.parent;
    }
        if(pParents.has(qWalker)) return qWalker;
    return undefined;
};