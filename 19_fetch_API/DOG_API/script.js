document.getElementById("btn").addEventListener("click", async ()=>{
    try{
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        console.log(data);
        document.getElementById("dogImage").src = data.message;
    } catch (error) {
        console.log("error", error);
    }
})

// using promise

// document.getElementById("btn").addEventListener("click", ()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data);
//         document.getElementById("dogImage").src = data.message;
//     })
//     .catch((error)=>{
//         console.log("error", error);
//     })
// })

// without event listener

// async function image(){
//     try{
//         const res = await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await res.json();
//         console.log(data);
//         document.getElementById("dogImage").src = data.message;
//     } catch (error) {
//         console.log("error", error);
//     }
// }