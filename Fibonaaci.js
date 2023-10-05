// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2



// Solution 1 
// const Fibonacci = function (n){
//     let arr = [0,1];

//     for(let i=2; i<=n; i++){
//         arr.push(arr[i-1]+arr[i-2]);
//         return i;
//     }
// }

// console.log(Fibonacci(3));



// Solution 2 Using Recursion

const fib = function (n){
    return (n === 0 || n === 1) ? n : (fib(n-1) + fib(n-2));
}

console.log(fib(8));


// DRY RUN
//   n = 3 => 2
//  fib(2) + fib(1)  => 1 + 1 => 2
//  fib(1) + fib(0)  => 1 + 0 => 1  (Executed from bottom)