

// A function is a block of code that performs a specific task. You write it once and can use it as many times as you want.
// without function we again and again write the same code for performing the same task.
let a=10;
let b=20;

console.log(a+b); 

// function declaration and function statment

function add(a,b){
    console.log(a+b);
}

add(31,14); // calling the function with arguments 


// example 1

function greet(name){
    console.log("Hello " + name);
}

greet("Disha");
greet("Parth");


// example 2

function multiply(x,y){
    console.log(x*y);
}

multiply(5,6);
multiply(10,20);
multiply(2,3);
multiply(4,5);
