(function(arr) {
    function isPalindrome(num) {
        return num.toString() === num.toString().split('').reverse().join('');
    }

    var palindromeNumbers = arr.filter(function(num) {
        return isPalindrome(num);
    });

    console.log(palindromeNumbers);
})([121, 123, 131, 45654, 78987, 555]);
