// Lexical scope means a function can access variables based on where it is written (defined) in the code, not where it is called.

let name = "Disha";

function greet() {
  console.log(name);
}

greet();


function parent(){

    let name="Parth";

    console.log(name);

function child(){
let name="Shiv"
    console.log(name);
}

child();
}
parent();


// example

let a = 10;

function first() {
  let b = 20;

  function second() {
    let c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  second();
}

first();