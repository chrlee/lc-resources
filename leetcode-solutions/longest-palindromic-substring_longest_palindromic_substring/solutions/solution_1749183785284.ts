function longestPalindrome(s: string): string {
    const isPalindrome = (str: string) => {
        for(let i = 0; i < Math.floor(str.length/2); ++i){
            if(str.at(i) !== str.at(str.length - 1 - i)) return false;
        }
        return true;
    }

    for(let i = s.length; i > 0; i--){
        for(let j = 0; j+i <= s.length; j++ ){
            const curr = s.slice(j, j+i);
        }
    }
            if(isPalindrome(curr)) return curr;
    return '';
};