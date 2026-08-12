

let numbers=[13,14,24,25,31]

const total=numbers.reduce((acc,curr)=>{
    return acc +=curr;
},0
);

console.log(total)

// example


let employees = [
  { name: "shiv", salary: 30000 },
  { name: "krishna", salary: 40000 },
  { name: "ganesh", salary: 50000 }
];

let totalSalary = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);

console.log(totalSalary);

// example


let products = [
  { name: "Pen", price: 20 },
  { name: "Book", price: 100 },
  { name: "Bag", price: 500 }
];

let total2 = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(total2);