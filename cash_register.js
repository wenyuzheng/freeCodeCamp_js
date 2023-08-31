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

const findChange = (change, cid) => {
  const keys = Object.keys(currencyAmount);
  const values = Object.values(currencyAmount);
  let i = values.length - 1;

  const resultObj = {};

  while (change !== "0.00") {
    console.log(i);

    if (i === -1) {
      return [];
    }

    if (change < values[i] || cid[i][1] === 0) {
      i--;
      continue;
    }

    change = Number(change - values[i]).toFixed(2);
    resultObj[keys[i]] = resultObj[keys[i]]
      ? resultObj[keys[i]] + values[i]
      : values[i];
    cid[i][1] -= values[i];

    console.log(resultObj);
  }

  return Object.entries(resultObj);
};

module.exports = { checkCashRegister, calculateTotalCid, findChange };
