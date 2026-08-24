const num = [11, 12, 13, 14, 15, 16, 17];

const sum = (num) => {
  let findSum = 0;

  for (let i = 0; i < num.length; i++) {
    findSum = num[i] + findSum;
  }
  console.log(findSum);
};
sum(num);

// using another method

const total = (num) => {
  let findSum = 0;

  for (let i of num) {
    findSum += i;
  }

  console.log("total", findSum);
};

total(num);
