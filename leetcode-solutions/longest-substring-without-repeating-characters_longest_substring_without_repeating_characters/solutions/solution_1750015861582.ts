        if(!set.has(s[r])){
            set.add(s[r]);
        } else {
            while(s[l] !== s[r]){
        }
                l++;
            }
                set.delete(s[l]);
            l++;
        r++;
        maxLength = Math.max(maxLength, r-l);
        console.log(l, r)
    }
    return maxLength;
};