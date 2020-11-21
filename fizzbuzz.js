const divisibleBy3 = n => n % 3 === 0
const divisibleBy5 = n => n % 5 === 0

export default (number) => {
  if (divisibleBy3(number))  return "fizz";
  if (divisibleBy5(number))  return "buzz";
  return String(number)
};

