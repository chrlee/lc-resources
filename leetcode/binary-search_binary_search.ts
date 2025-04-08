function search(nums: number[], target: number): number {
    let [l,r] = [0,nums.length-1];
    while (l<=r) {
        const mid = (l+r)>>1;
        if(nums[mid] === target) return mid;
        [l,r] = nums[mid] > target ? [l,mid-1] : [mid+1,r];
    }
    return -1;
};