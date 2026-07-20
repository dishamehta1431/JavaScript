// js fucntions have a built-in object called "arguments" which is an array-like 
// object that contains all the arguments passed to the function.

function subtract() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result -= arguments[i];
  }
  console.log("total substraction is: " + result);
}

// invoking the function with different number of arguments
subtract(10, 5, 2, 8, 3, 9, 12, 45, 56);


// example 1

function multiply() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

console.log("total multiplication is: " + result);
}


multiply(2, 3, 4, 5, 6, 7, 8, 9, 10);

//example 2

function divide() {
  let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
    result /= arguments[i];
  }
  console.log("total division is: " + result);
}

divide(1000, 2, 5, 10); 
