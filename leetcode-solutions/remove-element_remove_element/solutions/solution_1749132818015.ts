    let end = nums.length - 1;
    while(nums[end] === val) end--;
    if(end === -1) return 0;
    for(let i = 0; i < end; i++){
        if(nums[i] !== val) continue;
        [nums[i], nums[end]] = [nums[end], nums[i]];
    }
        while(nums[end] === val){
            end--;
        }
    return end+1;
            if(end < i) return end+1;
};
function removeElement(nums: number[], val: number): number {