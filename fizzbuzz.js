const divisibleBy3 = n => n % 3 === 0

export default (number) => divisibleBy3(number) ? "fizz" : String(number);

