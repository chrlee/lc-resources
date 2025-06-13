    while(l<r){
    let arr = s.split('');
    let [l,r] = [0,s.length-1];
function reverseOnlyLetters(s: string): string {

}
            if(!isLetter(arr[l])) l++;
            if(!isLetter(arr[r])) r--;
    }
    return arr.join('');
        if(isLetter(arr[l]) && isLetter(arr[r])){
        (c >= upperA && c <= upperZ)
    return (c >= lowerA && c <= lowerZ) ||
            [arr[l], arr[r]] = [arr[r], arr[l]];
        } else{
            l++;
            r--;
        }