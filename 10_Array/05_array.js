// iterating through array element

const fruits = ["apple", "banana", "orange", "kiwi", "guava", "mango"];

// using for loop

for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
}


// using for of loop

for(let fruit of fruits){
    console.log(fruit)
}

// using forEach

fruits.forEach((fruits,index)=>{

    console.log("for EAch",index,fruits)
});

// array concatenation 

let color=["blue","black","green","red","purple"];

let car=["defender","verna","BMW","lamborghini"," Porsche's Ultraviolet"];

let Items=car.concat(color);

console.log("all concat items ",Items)

// convert into string 

console.log("convert into string ",color.toString())

console.log("all items are convert into string ",Items.toString())

