let num;
const evenNum =
  +num % 2 === 0
    ? `${num} is even number`
    : !+num % 2 === 0
    ? `${num} is odd number`
    : num === 0
    ? `${num} is 0`
    : `Invalid value`;

console.log(evenNum);
