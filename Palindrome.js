// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false


// Solution 1 :
// Step 1 : Convert Number to string using toString Method
// Step 2 : Spilt the string into array
// Step 3 : Reverse the Array
// Step 4 : Convert String to Number
// Step 5 : Check if original number is equal to reversed number

const isPalindrome = function (x){
    if(x<0) return false;
    return x === parseInt(x.toString().split("").reverse().join(""));
}

console.log(isPalindrome(121));
console.log(isPalindrome(10));

// DRY RUN => // 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"