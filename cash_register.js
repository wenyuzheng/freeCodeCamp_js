function checkCashRegister(price, cash, cid) {
  const change = cash - price;
  if (change === calculateTotalCid(cid)) {
    return { status: "CLOSED", change: cid };
  } else if (change > calculateTotalCid(cid)) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

const calculateTotalCid = (cid) => {
  const total = cid.reduce((sum, curr) => sum + curr[1], 0);
  return total;
};

const currencyAmount = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.5,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

// const findChange = (change, cid) => {
//   let result = [];

//   for (let i = 0; i < cid.reverse().length; i++) {
//     if (change < values[cid[i][0]] || cid[i][1] === 0) {
//       continue;
//     }

//     change -= values[cid[i][0]];

//     if (change === 0) {
//       result.push([cid[i][0], values[cid[i][0]]]);
//     }
//   }

//   if (change !== 0) {
//     return [];
//   }

//   return result;
// };

const findChange = (change, cid) => {
  const keys = Object.keys(currencyAmount);
  const values = Object.values(currencyAmount);
  let currIndex = values.length - 1;

  const resultObj = {};

  while (change !== 0) {
    if (change < values[currIndex]) {
      currIndex--;
      continue;
    }

    change -= values[currIndex];
    resultObj[keys[currIndex]] = resultObj[keys[currIndex]]
      ? resultObj[keys[currIndex]] + values[currIndex]
      : values[currIndex];

    // if insufficient amount / money left, break out
  }

  return Object.entries(resultObj);
};

module.exports = { checkCashRegister, calculateTotalCid, findChange };
