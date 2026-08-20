// // without exception handling

// function atmPin(pin){

//     let atmpin=1234;

//     if(atmpin!=pin){
//         throw new Error("invalid pin")
//        }


//        console.log("welcome to the xyz bank!");
//        console.log("Do you want to explore more services?”);
// }

// atmPin(1234);


// with try catch block

// function checkAtmPin(pin){

//     let atmPin=1234;

//     try{
//         if(atmPin!=pin){
//             throw new Error("Invalid Pin");
//         }

//         console.log("welcome to xyz bank!!")
//         console.log("Do you want to explore more services?")

//     }catch(error){
//         console.log("error",error.message)
//     }
    
// }

// checkAtmPin(7896);



// finally

function checkAtmPin(pin){

    let atmPin=1234;

    try{

        if(atmPin!=pin){
            throw new Error("Invalid Pin!!");
        }

    }catch(error){
        console.log("error",error.message);
    }finally{
        console.log("welcome to the xyz Bank!!");
        console.log("Do you want to explore more services?")
        
    }
}

checkAtmPin(7896)