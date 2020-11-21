const divisibleBy = (div, n) => n % div === 0;
const divisibleBy3 = (n) => divisibleBy(3, n);
const divisibleBy5 = (n) => divisibleBy(5, n);

export default (number) => {
  if (divisibleBy3(number)) return "fizz";
  if (divisibleBy5(number)) return "buzz";
  return String(number);
};