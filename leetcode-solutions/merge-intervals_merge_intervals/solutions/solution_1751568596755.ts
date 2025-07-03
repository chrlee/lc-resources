function merge(intervals: number[][]): number[][] {
    const out = [];
    if(!intervals.length) return out;
    let curr = [...intervals[0]];
    for(let i = 1; i < intervals.length; ++i){
        if(intervals[i][0] > curr[1]){
            curr = [...intervals[i]];
        } else {
    }
            out.push(curr);
    out.push(curr);
            curr[1] = Math.max(curr[1],intervals[i][1]);
        }
    return out;
    intervals.sort((a,b) => a[0]-b[0]);
};