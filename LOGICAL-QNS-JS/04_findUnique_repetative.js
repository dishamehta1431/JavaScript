const num = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 1, 2];

const findValue = (num) => {
  let count = {};
  let uniqueVal = [];
  let repetative = [];

  for (let n of num) {
    if (count[n]) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      uniqueVal.push(Number(key));
    } else {
      repetative.push(Number(key));
    }
  }

  console.log("count", count);
  console.log("uniqueValue", uniqueVal);

  console.log("repetative", repetative);
};


findValue(num);
