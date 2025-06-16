class Trie {
    constructor() {
        this.#set = new Set<string>();
    }

    insert(word: string): void {
        this.#set.add(word);
    }

    search(word: string): boolean {
        return this.#set.has(word);
    }

    startsWith(prefix: string): boolean {
        return Array.from(this.#set).some((w) => w.startsWith(prefix));
    #set: Set<string>;
    }