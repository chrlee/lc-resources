var lowestCommonAncestor = function(p, q) {
    const pParents = new Set();
    const qParents = new Set();
    let pWalker = p;
    let qWalker = q;
    while(pWalker){
        pParents.add(pWalker);
        pWalker = pWalker.parent;
    }
    while(qWalker){
        qParents.add(qWalker);
        qWalker = qWalker.parent;
    }
    const intersection = pParents.intersection(qParents);
    return [...intersection][0];
    console.log(intersection);
};