// hoisting is a where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

// Hoisting: JavaScript moves variable and function declarations to the top of their scope before execution.

// var: Hoisted and initialized with undefined, so it can be accessed before declaration.

var a = 10;

// let: Hoisted but not initialized. It stays in Temporal Dead Zone (TDZ) until declaration.

let b = 20;

// const: Hoisted but not initialized. It also stays in TDZ and must be assigned a value when declared.

const c = 30;

// hoisting example
play();

function play() {
  console.log("i am playing vice city game");
}

hoistedVariable = "gun name is AK-47";

console.log(hoistedVariable);

var hoistedVariable;

let activity = () => {
  console.log("my activity is running");
};

let a;

console.log(a);

a = 31;

// example 1
motivate();
function motivate() {
  console.log("i am motivating myself");
}

nature = "i love nature";
console.log(nature);
var nature;

let myActivity = () => {
  console.log("my activity is swimming");
};

let x;

console.log(x);
x = 14;

// example 2
greet();
function greet() {
  console.log("hello javascript");
}

greetMessage = "hello full stack developer";
console.log(greetMessage);
var greetMessage;

const x;

console.log(x);

x = 45;
