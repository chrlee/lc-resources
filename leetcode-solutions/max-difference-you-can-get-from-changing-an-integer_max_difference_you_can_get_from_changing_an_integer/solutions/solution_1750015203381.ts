function maxDiff(num: number): number {
    const str = num.toString().split('');
    const aStartIdx = str.findIndex((c) => c !== '9');
    const singleDigit = str.every((c) => c === str[0]);
    const bStartIdx = str.findIndex((c, i) => c !== '1' && c !=='0');

    const a = +((aStartIdx > -1 ? str.map((c) => c === str[aStartIdx] ? '9' : c) : str).join(''));
    const b = +((bStartIdx > -1 ? str.map((c) => c === str[bStartIdx] ? `${singleDigit || bStartIdx === 0 ? '1' : '0'}
` : c) : str).join(''));

    console.log(a, b)
    return a-b;
};