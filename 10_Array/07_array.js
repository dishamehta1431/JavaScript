

// some method

const ages=[5,10,15,20,25,30]

const result=ages.some((x)=>{

    return x >18;


});

console.log(result)

// every method

const marks=[35,45,65,89,90]

const result2=marks.every((y)=>{

    return y>=35;
})

console.log(result2)

// reverse method

const num=[10,20,30,40,50,60,70]

result3=num.reverse();

console.log(result3)


// indexOf method

const Cars=["Porsche","Defender","Thar","Lemborghini","Verna","BMW"]

console.log(Cars.indexOf("Verna"))

//  If the element is not present in the array, it will return -1.
