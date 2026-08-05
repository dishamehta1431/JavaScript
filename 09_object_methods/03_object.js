// creating object using function constructor

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("person=> ", person);

// destructuring object

const { name, age, city } = person;

console.log("name=> ", name);
console.log("age=> ", age);
console.log("city=> ", city);

const person2 = {
  name: "Alice",
  age: 25,
  city: "Los Angeles",
};

const person3 = {
  name: "Charlie",
  age: 35,
  city: "Chicago",
};

function PersonDetails(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person4 = new PersonDetails("bob", 40, "kathmandu");
console.log("person4=> ", person4);

const person5 = new PersonDetails("sita", 20, "kathmandu");
console.log("person5=> ", person5);

// adding methods to object

PersonDetails.prototype.email = "person@gmail.com";

console.log("persong object with new email property=> ", PersonDetails.email);

// removing properties from object

delete PersonDetails.city;
console.log("person object after removing city property=> ", person);

// hasOwn  property method

console.log("person hasOwn property name=> ", person.hasOwnProperty("name"));
console.log("person hasOwn property city=> ", person.hasOwnProperty("city"));


// Itraiting through object

// for in loop

for (let key in person) {
  console.log("key=> ", key, "value=> ", person[key]);
}
