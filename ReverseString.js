// Question : Reverse The Given String 
// Example : I/P  Str = "Apple" 
            //  O/P str = "elppA"

let str = "Apple";

// Solution 1 : 
// Step 1 : Convert String to Array 
// Step 2 : Reverse The Array
//  Step 3 : Join The Reversed Array


// let result = str.split("").reverse().join("");
// console.log(result);
          


// Solution 2 
// Step 1 : create Another Empty String
// Step 2 : Run A Loop from End Of Original String 
// Step 3 : Add to the result string 
// Step 4 : and if it is undefined at any index then plz continue to next iteration

let result = "";
for(let i=str.length; i>=0 ; i--){
    if(str[i] === undefined){
        continue;
    }
    result += str[i];
}

console.log(result);