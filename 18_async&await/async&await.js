function Payment(amount) {
  return new Promise((resolve, reject) => {
    if (amount <= 0) {
      reject("failed to initiate payment amount should be positive value");
    } else {
      setTimeout(() => {
        console.log("stage-1", `₹ ${amount} payment initiated....`);
        resolve(amount);
      },3000);
    }
  });
}

let balance = 10000;

function CheckBalance(amount) {
  return new Promise((resolve, reject) => {
    if (amount > balance) {
        setTimeout(() => {
            reject("insufficient balance");
        }, 2000);
    } else {
      setTimeout(() => {
        console.log("stage-2", "payment can be done due to sufficient balance");
        resolve(amount);
      }, 3000);
    }
  });
}

function PaymentDeduct(amount) {
    return new Promise((resolve, reject) => {
        const remainBalance = balance - amount;
        if (remainBalance < 0) {
            reject(`${remainBalance} is available balance`);
        } else {
            setTimeout(() => {
                console.log("stage-3", "processing payments...");
                resolve(amount);
            }, 3000);
        }
    });
}

function PaymentStatus(amount) {
    let remainBalance = balance - amount;
    console.log("remain balance", remainBalance);
    return new Promise((resolve, reject) => {
        if (remainBalance < balance) {
            setTimeout(() => {
                console.log("stage-4", "payment has been processed....");
                resolve(amount);
            }, 3000);
        } else {
            reject("payment has been failed");
        }
    });
}


async function PaymentProcess(amount) {
    try{
        const payment = await Payment(amount);

        const BalanceCheking= await CheckBalance(payment);

        const deductingPayment = await PaymentDeduct(BalanceCheking);
        const status = await PaymentStatus(deductingPayment);
        console.log("payment status", status);
    }
catch(error){
    console.log(error);
}finally{
    console.log("Do You Want To Explore More??");
}
}

PaymentProcess(5000);
