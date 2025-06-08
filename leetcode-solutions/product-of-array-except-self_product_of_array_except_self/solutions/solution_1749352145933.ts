function productExceptSelf(nums: number[]): number[] {
    const prefixes = Array.from({ length: nums.length }, () => 1);
    const suffixes = Array.from({ length: nums.length }, () => 1);
    for(let i = 1; i < nums.length; ++i){
        prefixes[i] = nums[i-1] * prefixes[i-1];
        suffixes[nums.length-i-1] = nums[nums.length-i] * suffixes[nums.length-i];
    }
    return prefixes.map((pref, i) => pref*suffixes[i]);
};