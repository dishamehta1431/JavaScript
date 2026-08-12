
let numbers=[14,31,24,13,25];

const doubleArray=numbers.map((num)=>
num * 2);

console.log(doubleArray)

// example

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];

let prices = products.map((product) => {
  return product.price;
});

console.log(prices);

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