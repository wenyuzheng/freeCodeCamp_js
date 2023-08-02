const { telephoneCheck } = require("../telephone_number_validator");

describe("telephone number validator", () => {
  test("eg1", () => {
    const result = telephoneCheck("1 555-555-5555");
    expect(result).toEqual(true);
  });

  test("eg2", () => {
    const result = telephoneCheck("1 (555) 555-5555");
    expect(result).toEqual(true);
  });

  test("eg3", () => {
    const result = telephoneCheck("5555555555");
    expect(result).toEqual(true);
  });

  test("eg4", () => {
    const result = telephoneCheck("555-555-5555");
    expect(result).toEqual(true);
  });

  test("eg5", () => {
    const result = telephoneCheck("(555)555-5555");
    expect(result).toEqual(true);
  });

  test("eg6", () => {
    const result = telephoneCheck("1(555)555-5555");
    expect(result).toEqual(true);
  });

  test("eg7", () => {
    const result = telephoneCheck("555-5555");
    expect(result).toEqual(false);
  });

  test("eg8", () => {
    const result = telephoneCheck("5555555");
    expect(result).toEqual(false);
  });

  test("eg9", () => {
    const result = telephoneCheck("1 555)555-5555");
    expect(result).toEqual(false);
  });

  test("eg10", () => {
    const result = telephoneCheck("1 555 555 5555");
    expect(result).toEqual(true);
  });

  test("eg11", () => {
    const result = telephoneCheck("1 456 789 4444");
    expect(result).toEqual(true);
  });

  test("eg12", () => {
    const result = telephoneCheck("123**&!!asdf#");
    expect(result).toEqual(false);
  });

  test("eg13", () => {
    const result = telephoneCheck("2 (757) 622-7382");
    expect(result).toEqual(false);
  });
});
