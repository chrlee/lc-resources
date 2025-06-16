        if(!this.#map.has(val)) return false;
        this.#arr[this.#map.get(val)] = this.#arr.at(-1);
        this.#map.set(this.#arr.at(-1), this.#map.get(val));
        this.#map.delete(val);
    }
        this.#arr.pop();
        return true;

    getRandom(): number {
        return this.#arr.at(Math.floor(Math.random()*this.#arr.length));
    }
    remove(val: number): boolean {

    }
        return true;
        this.#arr.push(val);
}
