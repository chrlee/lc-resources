            r++;
        } else {
            currentLength++;
            freq.set(s[l], (freq.get(s[l]) ?? 1) - 1);
            l++;
            freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);
            r++;
            freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);
        if(currentLength - maxCount <= k){
        let currentLength = r-l;
    while(r < s.length){
    maxCount = freq.size ? Math.max(...freq.values()) : 0;
    }
        r++;
        freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);
    while(r < k){
    let freq = new Map<string, number>();