// creating object class constructor

class personDetails{
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

const person1 = new personDetails("John", 30, "New York");

console.log("person1=> ", person1);


// creating one more object with different values using object literal

const student = {
    name: "Alice",
    age: 25,
    city: "Los Angeles",
};

// now merging two objects into one object 

const allDetails = {...person1, ...student};
console.log("allDetails=> ", allDetails);

// object length

console.log("allDetails length=> ", Object.keys(allDetails).length);

