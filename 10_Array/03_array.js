// adding element to an array

const fruits=["apple","banana","strawberry","guava"]

console.log("array ",fruits.length,fruits)

// now adding an element into an array

fruits.push("kiwi")

console.log("after adding ",fruits.length,fruits)

// adding element from the starting


fruits.unshift("mango")

console.log("start element ",fruits)

fruits.pop();

// last element remove

console.log("last element removing ",fruits)

fruits.shift();

// frist element remove

console.log("after first element removing ",fruits)

// splice 

// splice method remove/add and replace

// adding
fruits.splice(2,0,"watermelon","graps")

console.log("add new 2 element ",fruits)

// removing

fruits.splice(3,2)

console.log("remove 2 elements ",fruits)





