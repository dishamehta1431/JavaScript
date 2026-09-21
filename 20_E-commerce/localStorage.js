// localStorage

const data ={
    id:"xyz",
    password:"1234"
}

// set item

localSorage.setItem("data", JSON.stringify(data));

// getItem

const userData = JSON.parse(localStorage.getItem("data"));

cosole.log(userData);

localDataValue.textContent=userData.id;