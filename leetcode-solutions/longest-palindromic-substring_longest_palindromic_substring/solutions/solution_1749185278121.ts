function longestPalindrome(s: string): string {
    let out = [0,0];
    for(let i = 0; i < s.length; ++i){
        let [l,r] = [i,i];
        while(l >= 0 && r < s.length && s[l] === s[r]){
            if(r-l > out[1] - out[0]) out = [l,r]; 
        }
        [l,r] = [i,i+1];
        while(l >= 0 && r < s.length && s[l] === s[r]){
            if(r-l > out[1] - out[0]) out = [l,r];
        }
    }
    return s.substring(out[0], out[1]+1);
            l--;
            r++;
            l--;
            r++;
};