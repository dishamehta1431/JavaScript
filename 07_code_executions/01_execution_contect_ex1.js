
// gec stands for "global execution context"
// 2 types of execution context
// 1. memory creation phase
// 2. code execution phase


var n=2;

function square(num){
  var result = num * num;
  return result;

}

var square2=square(n);
var square4=square(4);

// example 1

var a=10;
var b=20;
function add(){
  var result = a + b;
  return result;
}

var sum=add(a, b);
var sum2=add(14,31);

// example 2

var x=10;
var y=20;
function multiply(){
  var result = x * y;
  return x*y;
}

var mul=multiply(x, y);
var mul2=multiply(14,31);