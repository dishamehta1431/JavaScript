let form = document.querySelector("form");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name == "") {
        alert("Please enter your name");
    } 
    else if (email == "") {
        alert("Please enter your email");
    } 
    else if (password == "") {
        alert("Please enter your password");
    } 
    else {
        alert("Form submitted successfully!");
    }
});