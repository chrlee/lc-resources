        } else if(node.val === q?.val){
            seenQ = true;
        }
            return node;
            return node;
        if(!leftResult) return rightResult;
            seenP = true;
        if(node.val === p?.val){
        if(!node) return null;
    const lca = (node) => {
    let seenQ = false;
        if(!rightResult) return leftResult;
        return node;
    }
    const node = lca(root);
        const leftResult = lca(node.left);
        const rightResult = lca(node.right);
    return seenP && seenQ ? node : null;