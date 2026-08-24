// by using method

const str="disha";

const reverseString=(str)=>{

    const arr =str.split("");
    console.log("string arr",arr);

    const reverseArray=arr.reverse();

    console.log("reverseArray",reverseArray);

    const reverseString =reverseArray.join("");

    console.log("reveseString",reverseString)
}

reverseString(str);

// by using loop

const reverseStringWithoutMethod=(str)=>{
    let reserved = "";


    for(let i =str.length-1;i>=0;i--){
        reserved+=str[i];
    }

    console.log("reserved",reserved);
    

};

reverseStringWithoutMethod(str);