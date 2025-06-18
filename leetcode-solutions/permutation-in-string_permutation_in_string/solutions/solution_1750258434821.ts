    while(r < s2.length){
        if(freq.has(s2[r])){
            freq2.set(s2[r], (freq2.get(s2[r]) ?? 0) + 1);
        } else {
            if(Array.from(freq.entries()).every(([k, v]) => freq2.get(k) === v)) return true;
            if(freq2.size) freq2 = new Map<string, number>();
            while(freq2.get(s2[r]) > freq.get(s2[r])){
                l++;
            }
                freq2.set(s2[l], (freq2.get(s2[l]) ?? 1) - 1);
            l = r;
        }
    let [l, r] = [0, 0]
    let freq2 = new Map<string, number>();
    }
    }
    return false;
        r++;