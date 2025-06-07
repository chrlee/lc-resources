function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number[]>();
    nums.forEach((num, i) => map.set(num, (map.get(num) ?? []).concat(i)));
    for(let i = 0; i < nums.length; ++i){
        if(map.has(target-nums[i]) && map.get(target-nums[i]).some((num) => num !== i)) return [i, map.get(target-nums
    }
    return [];
[i]).find((v) => v !== i)];
};