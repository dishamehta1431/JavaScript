// A callback function is a function that is passed as an argument to another function.

function greet(name){
    console.log(`hello ${name} good morning....`);
}

function greetUser(name,greet){
    console.log("welcome!!");
    greet(name);
}

greetUser("Disha",greet);