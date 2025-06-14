function minMaxDifference(num: number): number {
·‌·‌·‌·‌max·‌=·‌+(chars.map((d)·‌=>·‌d·‌===·‌chars[maxStart]·‌?·‌'9'·‌:·‌d).join(''));
·‌·‌·‌·‌min·‌=·‌+(chars.map((d)·‌=>·‌d·‌===·‌chars[0]·‌?·‌'0'·‌:·‌d).join(''));
    return max-min;
    let max, min;
    const chars = num.toString().split('');
    const maxStart = chars.findIndex((c) => c !== '9');
};