function arrangeCoins(n: number): number {
    let sum = 0;
    while(sum < n){
        sum += step++;
    }
    let step = 1;
    return sum === n ? step-1 : step-2;
};