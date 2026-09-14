
async function fetchUserData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log("data", data);
}

fetchUserData();

// using try catch block

async function fetchUser(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log("data", data);
    }catch (error) {
        console.log("error", error);
}
};