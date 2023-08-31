const { checkCashRegister, calculateTotalCid } = require("../cash_register");

describe("calculateTotalCid", () => {
  test("eg1", () => {
    const result = calculateTotalCid([
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ]);
    const expected = 0;
    expect(result).toEqual(expected);
  });

  test("eg2", () => {
    const result = calculateTotalCid([
      ["PENNY", 1.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 50],
      ["TWENTY", 0],
      ["ONE HUNDRED", 100],
    ]);
    const expected = 151.01;
    expect(result).toEqual(expected);
  });
});

describe("cash_register", () => {
  test("eg1", () => {
    const result = checkCashRegister(5, 10, [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ]);
    const expected = { status: "INSUFFICIENT_FUNDS", change: [] };
    expect(result).toEqual(expected);
  });

  test("eg2", () => {
    const result = checkCashRegister(5, 5, [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ]);
    const expected = {
      status: "CLOSED",
      change: [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    };
    expect(result).toEqual(expected);
  });
});
