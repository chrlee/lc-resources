    if(!intervals.length || intervals.length === 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let interval = intervals[0];
    let i = 1;
    const out = [];
    while(i < intervals.length){
        if(interval[1] < intervals[i][0]){
            out.push(interval);
        } else {
            interval = intervals[i];
            interval[1] = Math.max(interval[1], intervals[i][1]);
        }
    }
        i++;
    return out;
    out.push(interval);
};