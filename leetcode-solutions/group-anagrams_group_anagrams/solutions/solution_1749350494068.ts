function groupAnagrams(strs: string[]): string[][] {
    const sorted = strs.map((str) => str.split('').sort((a, b) => a.localeCompare(b)).join(''));
    return Object.values(Object.groupBy(strs, (str, i) => sorted[i]))

};