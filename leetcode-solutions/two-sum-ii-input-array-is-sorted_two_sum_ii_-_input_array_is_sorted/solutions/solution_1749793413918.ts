function twoSum(numbers: number[], target: number): number[] {
    let [l,r] = [0, numbers.length-1];
    while(l < r){
        const sum = numbers[l] + numbers[r];
        if(sum === target) return [l+1, r+1];
        else if (sum > target) r--;
        else l++;
    }
    return [-1, -1];
};