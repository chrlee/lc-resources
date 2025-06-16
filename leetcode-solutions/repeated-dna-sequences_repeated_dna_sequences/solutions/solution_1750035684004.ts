function findRepeatedDnaSequences(s: string): string[] {
    const set = new Set<string>();
    const out = new Set<string>();
    for(let i = 0; i <= s.length-10; i++){
        const substr = s.slice(i, i+10);
        if(set.has(substr)) out.add(substr);
        else set.add(substr);
    }
    return Array.from(out);
};