// recursion is a process in which a function calls itself directly or indirectly. 
// The corresponding function is called a recursive function. Recursion is used to solve
//  problems that can be broken down into smaller, similar subproblems.


// find factorial of a number using recursion

function factorial(n) {
    if (n === 0) {
        return 1; 
    } else if(n===0||n===1){
        return 1;
    
    }   else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

// example 1

// it was sum of n natural numbers using recursion
// sum of n natural numbers = n + (n-1) + (n-2) + ... + 1

function sum(n){
    if(n===0){
        return 0;
    }
    else if(n===1){
        return 1;
    }   
    else{
        return n + sum(n-1);
    }
}

console.log(sum(5));

// example 2

// it was substraction of n natural numbers using recursion
// substraction of n natural numbers = n - (n-1) - (n-2) - ... - 1

function subtraction(n){
    if(n===0){
        return 0;
    }
    else if(n===1){
        return 1;
    }   
    else{
        return n - subtraction(n-1);
    }
}
console.log(subtraction(4));