// Last updated: 4/6/2025, 2:02:46 AM
function nextGreatestLetter(letters: string[], target: string): string {
    let [l,r] = [0, letters.length-1];
    while (l<=r) {
        const mid = (l+r)>>1;
        if(letters[mid] > target && mid === 0 || letters[mid] > target && letters[mid-1] <= target) return letters[mid];
        [l,r] = letters[mid] > target ? [l,mid-1] : [mid+1,r];
    }
    return letters[0];
};