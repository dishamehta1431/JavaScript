// join method

const color=[
    "black",
    "blue",
    "pink",
    "purple",
    "red",
    "gray"
]

console.log("join ",color.join(" "))

console.log(color.join("-"))


// flat method

const numbers=[1,2,3,4,5,6,7,8,9,10]

console.log("flat ",numbers.flat());

// nested array 

const num=[28,4,7,16,[13,10,25,[14,31]]];

console.log("nested array ",num.flat(Infinity));


// slice method

console.log("colors",color)
console.log("slice method ",color.slice(2,4))


