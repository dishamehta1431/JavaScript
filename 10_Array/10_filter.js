let numbers=[13,14,24,25,31]

const greaterNumber=numbers.filter((num)=>
num>20);
console.log(greaterNumber)

// example

let personDetails = [
  { name: "shiv", age: 18 },
  { name: "krishna", age: 20 },
  { name: "ganesh", age: 22 }
];

let names = personDetails.map((person) => {
  return person.name;
});

console.log(names);

// example 

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Phone", price: 30000 }
];

let expensive = products.filter((product) => {
  return product.price > 10000;
});

console.log(expensive);