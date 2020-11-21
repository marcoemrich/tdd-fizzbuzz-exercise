const divisibleBy = (div, n) => n % div === 0;
const divisibleBy3 = (n) => divisibleBy(3, n);
const divisibleBy5 = (n) => divisibleBy(5, n);

const fizz = (n) => (divisibleBy3(n) ? "fizz" : "");
const buzz = (n) => (divisibleBy5(n) ? "buzz" : "");

export default (n) => (fizz(n) || buzz(n) ? fizz(n) + buzz(n) : String(n));
