function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    nums.forEach((num) => {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    });
    return [...freq.entries()].sort(([k1, v1], [k2, v2]) => v2-v1).slice(0,k).map(([k, v]) => k);
};