// In Javascript, there are two kinds of object properties

// Data properties 
// accessor properties 

const student = {

    // data property 

    firstName: "Disha",
}

// get - to define a getter method to get the property value

const car={

    name:"Verna",
    color:"black",

    get carName(){
        return this.name;
    }
}

console.log("car name is: ",car.carName);



