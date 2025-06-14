function minMaxDifference(num: number): number {
    const max = [];
    const min = [];
    for(let i = 0; i < 10; ++i){
        max.push(+(num.toString().split('').map((d) => +d === i ? '9' : d).join('')));
        min.push(+(num.toString().split('').map((d) => +d === i ? '0' : d).join('')));
    }
    return Math.max(...max) - Math.min(...min);
};