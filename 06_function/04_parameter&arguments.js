// function with parameters and arguments

function employee(name, age) {
  console.log("Name: " + name);
  console.log("Age: " + age);
}

employee("John", 30);
employee("Alice", 25);
employee("Bob", 40);
employee("Eve", 28);
employee("Charlie", 35);


// function first prefers to the arguments passed to it, if not then it will take the default value of the parameter


function employeeWithDefault(name="micheal", age = 30) {
  console.log("Name: " + name);
  console.log("Age: " + age);
}

employeeWithDefault("John", 30);
employeeWithDefault("Alice");
employeeWithDefault("Bob", 40);
employeeWithDefault("Eve", 28);

employeeWithDefault();

// it was difference between parameter and argument, parameter is the variable in the declaration of function, while argument is the actual value of this variable that gets passed to function.

// example 1

function student(name,marks) {
  console.log("Name: " + name);
  console.log("Marks: " + marks);
}

student("John", 85);
student("Alice", 90);
student("Bob", 75);
student("Eve", 95);

// example 2

function hotel(name, location) {
  console.log("Name: " + name);
  console.log("Location: " + location);
}

hotel("The Grand Hotel", "New York");
hotel("The Beach Resort", "Miami");
hotel("The Mountain Lodge", "Colorado");