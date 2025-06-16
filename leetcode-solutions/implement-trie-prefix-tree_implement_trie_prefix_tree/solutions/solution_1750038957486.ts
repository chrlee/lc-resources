    constructor() {
        this.roots = new Map<string, TrieNode>();
    }

    insert(word: string): void {
        const startLetter = word[0];
}

class Trie {
    roots: Map<string, TrieNode>;
        if(!this.roots.has(startLetter)) this.roots.set(startLetter, new TrieNode(startLetter));
        let node = this.roots.get(startLetter);
        const s = word.split('').reverse();
        s.pop();
        while(s.length){
            const curr = s.pop();
            if(node.children[curr] !== undefined) node = node.children[curr];
            else {