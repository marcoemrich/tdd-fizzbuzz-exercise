import {jest} from '@jest/globals';
import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("returns a number as string for no special cases (1 => 1)", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
  it("returns a fizz for a number that is divisible by 3 (3 => fizz)", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });
  it("returns a fizz for a number that is divisible by 3 (6 => fizz)", () => {
    expect(fizzbuzz(6)).toEqual("fizz");
  });
  it("returns a buzz for a number that is divisible by 5 (5 => buzz)", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
  });
  it.todo("returns a buzz for a number that is divisible by 5 (10 => buzz)");
  it.todo("returns fizzbuzz for a number that is divisible by 3 and 5 (15 => fizzbuzz)");
});
