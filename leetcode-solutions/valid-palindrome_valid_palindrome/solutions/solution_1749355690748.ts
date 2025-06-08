const a = 'a'.charCodeAt(0);
    const converted = s.toLowerCase().split(' ').filter((word) => word.length).join('').split('').filter((char) => {
        const code = char.charCodeAt(0);
        return (code >= a && code <= z) || (code >= zero && code <= nine);
    for(let i = 0; i < converted.length / 2; ++i){
        if(converted[i] !== converted[converted.length-i-1]) return false;

function isPalindrome(s: string): boolean {
const z = 'z'.charCodeAt(0);
const zero = '0'.charCodeAt(0);
const nine = '9'.charCodeAt(0);
    }
    return true;
    });
};