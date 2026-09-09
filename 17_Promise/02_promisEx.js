
 let foodItems = ["pizza", "burger", "pasta", "samosa", "biryani"];

//  let foodItems = "";

function orderFood(id) {

    orderId = "1234abcd";

    return new Promise((resolve, reject) => {

        if (foodItems === "") {

            setTimeout(() => {

                reject("food items are not available");

            }, 2000);

        } else {

            setTimeout(() => {

                console.log("stage-1", "food items are available");

                resolve(orderId);

            }, 3000);

        }
    });
}


orderFood("pizza")

    .then((orderId) => {

        return new Promise((resolve, reject) => {

            if (orderId === "") {

                reject("order failed");

            } else {

                setTimeout(() => {

                    console.log("stage-2", "order created");

                    resolve(orderId);

                }, 3000);
            }
        });
    })


    .then((orderId) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                console.log("stage-3", "restaurant was informed");

                resolve(orderId);

            }, 3000);
        });
    })


    .then((orderId) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                console.log(
                    "stage-4",
                    orderId,
                    "food delivered to customer"
                );

                resolve(orderId);

            }, 3000);
        });
    })


    .catch((err) => {

        console.log(err);

    })


    .finally(() => {

        setTimeout(() => {

            console.log("do you want to order more food?");

        }, 1000);
    });
