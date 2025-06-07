function isAnagram(s: string, t: string): boolean {
    const freq = new Map<string, number>();
    for(let i = 0; i < s.length; ++i){
        freq.set(s[i], (freq.get(s[i]) ?? 0) + 1);
    }
    for(let i = 0; i < t.length; ++i){
        if(!freq.has(t[i])) return false;
        freq.set(t[i], freq.get(t[i])-1);
    }

    return [...freq.values()].every((v) => v === 0);
};