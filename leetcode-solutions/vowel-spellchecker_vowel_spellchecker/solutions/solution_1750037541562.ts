        if(!capMap.has(curr)) capMap.set(curr, i);
    });
    const vowelMap = new Map<string, number>();
    return queries.map((q) => {
    wordlist.forEach((w, i) => {
        const key = getKey(w);
    })
        if(!vowelMap.has(key)) vowelMap.set(key, i);
        const curr = w.toLowerCase();
    wordlist.forEach((w, i) => {
    const capMap = new Map<string, number>();
function spellchecker(wordlist: string[], queries: string[]): string[] {
    const set = new Set<string>(wordlist);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const getKey = (w) => w.toLowerCase().split('').map((c) => vowels.includes(c) ? '_' : c).join('')
        if(set.has(q)) return q;