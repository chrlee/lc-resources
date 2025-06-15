function maxProfit(prices: number[]): number {
    let [maxProf, localMin, localMax] = [0, Infinity, -Infinity];
    for(let i = 0; i < prices.length; ++i){
        const curr = prices[i];
        if(curr < localMin) {
        if(curr > localMax) localMax = curr;
        maxProf = Math.max(maxProf, localMax - localMin);
    }
    return maxProf;
            localMin = curr;
        }
            localMax = -Infinity;
};