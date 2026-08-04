// an javascript object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.`

// creating object using object literal syntax

const student = {
  name: "John Doe",
  age: 20,
  rollNumber: 12345,
};

console.log(typeof student);
console.log("student=> ", student);

// here student object which contains some information regarding the student in key value pairs.

// creating  object using object constructor

const student1 = new Object();

console.log(typeof student1);

student1.name = "bob";
student1.age = 21;
student1.rollNumber = 12346;

console.log("student1=> ", student1);

// example 1

const employee = {
  name: "Alice",
  age: 30,
  position: "Software Engineer",
};

console.log("employee=> ", employee);

const employee1 = new Object();

employee1.name = "Bob";
employee1.age = 28;
employee1.position = "Data Analyst";

console.log("employee1=> ", employee1);

// example 2

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log("car=> ", car);

const car1 = new Object();

car1.make = "Honda";
car1.model = "Civic";
car1.year = 2021;

console.log("car1=> ", car1);

// example 3

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

console.log("book=> ", book);

const book1 = new Object();

book1.title = "To Kill a Mockingbird";
book1.author = "Harper Lee";
book1.year = 1960;

console.log("book1=> ", book1);
