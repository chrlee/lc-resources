// Last updated: 4/6/2025, 2:06:40 AM
function nextGreatestLetter(letters: string[], target: string): string {
    let [l,r] = [0, letters.length-1];
    while (l<=r) {
        const mid = (l+r)>>1;
        [l,r] = letters[mid] > target ? [l,mid-1] : [mid+1,r];
    }
    return letters[l === letters.length ? 0 : l];
};