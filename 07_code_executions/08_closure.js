
function outer() {
    let msg = "Hello Closure!!";

    function inner() {
        console.log(msg);
    }

    return inner;
}



let msg = outer();

console.log("msg", msg())