// object set methods

// example 

const employeeDetail={

    name:"bob",
    age:"",

    set employeeAge(age){
        this.age=age;
    }
   
    
}

employeeDetail.employeeAge=24;

console.log("Employee Age:",employeeDetail.age)

