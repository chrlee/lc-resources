    exp(name: string): string[] {
        if(!this.#tables.has(name)) return [];
        return Array.from(this.#tables.get(name).entries()).map(([k, v]) => [k.toString()].concat(v).join(','));

    }
        return this.#tables.get(name).get(rowId)?.[columnId-1] ?? "<null>";
#columns.get(name)) return "<null>";
        if(!this.#tables.has(name) || rowId < 1 || rowId >= this.#ids.get(name) || columnId < 1 || columnId > this.
    sel(name: string, rowId: number, columnId: number): string {

    }
        this.#tables.get(name)?.delete(rowId);
    rmv(name: string, rowId: number): void {

    }
        return true;
        this.#ids.set(name, (this.#ids.get(name) ?? 0) + 1);
    }