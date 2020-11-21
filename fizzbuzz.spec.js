import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  test.each([
    [1, "1"],
    [11, "11"],
    [3, "fizz"],
    [6, "fizz"],
    [5, "buzz"],
    [10, "buzz"],
    [15, "fizzbuzz"],
    [30, "fizzbuzz"],
  ])("fizzbuzz(%i) => %s", (n, expected) => {
    expect(fizzbuzz(n)).toEqual(expected);
  });
});
