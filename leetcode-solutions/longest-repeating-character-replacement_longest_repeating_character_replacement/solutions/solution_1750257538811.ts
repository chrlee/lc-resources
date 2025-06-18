            freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);
            r++;
        } else {
            currentLength++;
            freq.set(s[l], (freq.get(s[l]) ?? 1) - 1);
            l++;
        }
        maxCount = Math.max(...freq.values());
        if(currentLength - maxCount <= k) maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;
};
        if(currentLength - maxCount <= k){