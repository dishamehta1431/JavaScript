let numbers=[1,2,3,4,5,6,7,8,9]

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
    if(numbers[i]===7){
     console.log("Found :",numbers[i])
        break
    }
}