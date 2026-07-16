// Function Expression
let play = function game() {
    console.log("Game is starting...");
}
// function expression is not hoisted, so we cannot call it before its declaration. If we try to call it before the declaration, it will throw an error.
play();


// example 1

let greet=function (name){
    console.log("Hello " + name);
}

greet("Disha");
greet("Parth");
greet("Bhavya");
greet("Rohit");

// example 2

let weekday=function (day){
    console.log("Today is " + day);
}

weekday("Monday");
weekday("Tuesday");
weekday("Wednesday");
weekday("Thursday");
weekday("Friday");

