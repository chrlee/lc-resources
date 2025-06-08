    const includes = new Set<number>();
    nums.forEach((num) => {
        includes.add(num);
    })

    includes.forEach((val) => {
    let maxLen = 0;
        if(!includes.has(val-1)){
        }
            let curr = val;
            while(includes.has(curr)){
            }
                curr++;
    })
            maxLen = Math.max(curr-val, maxLen);
    return maxLen;
};