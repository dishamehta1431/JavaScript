

// fetch using promises

function fetchUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log("data", data))
        .catch(error => console.log("error", error));
}
fetchUserData();
