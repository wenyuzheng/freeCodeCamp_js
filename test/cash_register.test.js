const {
  checkCashRegister,
  calculateTotalCid,
  findChange,
} = require("../cash_register");

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
  test("Insufficent eg1", () => {
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

  test("Closed eg1", () => {
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

  test("Closed eg2", () => {
    const result = checkCashRegister(4.5, 5, [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0.5],
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
        ["QUARTER", 0.5],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    };
    expect(result).toEqual(expected);
  });

  // test("Open eg1", () => {
  //   const result = checkCashRegister(19.5, 20, [
  //     ["PENNY", 1.01],
  //     ["NICKEL", 2.05],
  //     ["DIME", 3.1],
  //     ["QUARTER", 4.25],
  //     ["ONE", 90],
  //     ["FIVE", 55],
  //     ["TEN", 20],
  //     ["TWENTY", 60],
  //     ["ONE HUNDRED", 100],
  //   ]);
  //   const expected = {
  //     status: "OPEN",
  //     change: [["QUARTER", 0.5]],
  //   };
  //   expect(result).toEqual(expected);
  // });
});

describe("findChange", () => {
  test("eg1", () => {
    const result = findChange(200, [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 200],
    ]);
    const expected = [["ONE HUNDRED", 200]];
    expect(result).toEqual(expected);
  });

  // test("eg2", () => {
  //   const result = findChange(101, [
  //     ["PENNY", 0],
  //     ["NICKEL", 0],
  //     ["DIME", 0],
  //     ["QUARTER", 0],
  //     ["ONE", 0],
  //     ["FIVE", 0],
  //     ["TEN", 0],
  //     ["TWENTY", 0],
  //     ["ONE HUNDRED", 100],
  //   ]);
  //   const expected = [];
  //   expect(result).toEqual(expected);
  // });

  test("eg3", () => {
    const result = findChange(100, [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 100],
      ["ONE HUNDRED", 0],
    ]);
    const expected = [["TWENTY", 100]];
    expect(result).toEqual(expected);
  });

  test("eg4", () => {
    const result = findChange(90, [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 20],
      ["TWENTY", 100],
      ["ONE HUNDRED", 0],
    ]);
    const expected = [
      ["TWENTY", 80],
      ["TEN", 10],
    ];
    expect(result).toEqual(expected);
  });

  test("eg5", () => {
    const result = findChange(96.74, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ]);
    const expected = [
      ["TWENTY", 60],
      ["TEN", 20],
      ["FIVE", 15],
      ["ONE", 1],
      ["QUARTER", 0.5],
      ["DIME", 0.2],
      ["PENNY", 0.04],
    ];
    expect(result).toEqual(expected);
  });
});
