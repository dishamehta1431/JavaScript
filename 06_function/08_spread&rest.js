// spread and rest is shorthand syntax for working array elements and object properties

// spread operator is used to expand an array or object into individual elements or properties

let fruits = ["apple", "banana", "orange"];
let newFruits = [...fruits, "grape", "kiwi"];
console.log(newFruits); // ["apple", "banana", "orange", "grape", "kiwi"]

// rest operator is used to collect multiple elements or properties into a single array or object

function totalgames(...games) {
    console.log(games);
}

totalgames("cricket", "football", "basketball","tennis","badminton","chess","hockey");



// example 1
// spread example 1

let names = ["John", "Jane", "Jim", "Jill"];
let newNames = [...names, "Jack", "Jenny"];
console.log(newNames); // ["John", "Jane", "Jim", "Jill", "Jack", "Jenny"]

// rest example 1

function students(...students) {
    console.log(students);
}   

students("Alice", "Bob", "Charlie", "David", "Eve");

// example 2
// spread example 2
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// rest example 2

function guns(...guns) {
    console.log(guns);
}
guns("AK-47", "M16", "Glock", "Desert Eagle", "MP5");
