// includes method
let fruits=["apple","banana","orange","cherry","mango"];


console.log(fruits.includes("mango"));

console.log(fruits.includes("pineapple"))


// sort method

let alphabet=["a","e","c","d","s","p"]

console.log(alphabet.sort())


// ascending order

let numArray=[1,2,9,40,50,67,78,3]

numArray.sort((a,b)=>
a-b)
console.log(numArray)


// descending order

numArray.sort((a,b)=>
b-a);

console.log(numArray)


/// find and findIndex

const numbersArray=[1,3,5,6,78,34,2]
let result=numbersArray.find((values)=> values>20);

console.log(result)

// findIndex

let result2=numbersArray.findIndex((values)=>values>5)

console.log(result2)


// other example

let name="Disha";
console.log(name)

let arr=name.split("")

let reverseName=arr.reverse();

console.log(reverseName)

console.log(reverseName.join(""))




