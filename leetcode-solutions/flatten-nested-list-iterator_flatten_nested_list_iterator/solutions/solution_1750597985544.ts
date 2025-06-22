                const currentInt = curr[indicesCopy[i]];
                if(!currentInt.isInteger()) curr = currentInt.getList();
                else break;
            }
            if(indicesCopy[indicesCopy.length-1] < curr.length-1){
                const currentInt = ++indicesCopy[indicesCopy.length-1];
                if(curr[currentInt].isInteger()) return true;
                indicesCopy.push(-1);
            } else {
                indicesCopy.pop();
            for(let i = 0; i < indicesCopy.length-1; ++i){
            let curr = this.list;
        while(indicesCopy.length){
        const indicesCopy = this.indices.slice();
    hasNext(): boolean {

    }
            }