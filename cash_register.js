function checkCashRegister(price, cash, cid) {
  const change = cash - price;

  const changesArr = findChange(change, cid);

  // console.log(cid);

  if (changesArr.length === 0) {
    return { status: "INSUFFICIENT_FUNDS", change: changesArr };
  } else if (change === calculateTotalCid(cid)) {
    // console.log(cid);
    return { status: "CLOSED", change: cid };
  } else {
    // console.log({ change, changesArr });

    return { status: "OPEN", change: changesArr };
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
  // As computer cannot deal with decimals calculation, multtply all numbers by 100 to make them as a whole, then divide them by 100 at the end
  const keys = Object.keys(currencyAmount);
  const values = Object.values(currencyAmount).map((e) => e * 100);
  change = change * 100;
  cid = cid.map((e) => [e[0], e[1] * 100]);

  let i = values.length - 1;

  const resultObj = {};

  while (change !== 0) {
    // No more currencies to look at, but no enough change so return empty
    if (i === -1) return [];

    if (change < values[i] || cid[i][1] === 0) {
      i--;
      continue;
    }

    change -= values[i];
    cid[i][1] -= values[i];
    resultObj[keys[i]] = resultObj[keys[i]]
      ? resultObj[keys[i]] + values[i]
      : values[i];

    // console.log(resultObj);
  }

  // console.log(Object.entries(resultObj));

  for (const key in resultObj) {
    resultObj[key] /= 100;
  }

  return Object.entries(resultObj);
};

module.exports = { checkCashRegister, calculateTotalCid, findChange };
