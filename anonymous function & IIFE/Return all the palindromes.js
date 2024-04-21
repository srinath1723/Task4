const isPalindrome=function (str) {
    
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

let words = ["level", "radar", "hello", "civic", "world"];

console.log(words.filter(isPalindrome));