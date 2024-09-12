let num;
const evenNum =
  +num < 0
    ? `${num} isn't a positive number ; please insert a positive number .`
    : +num % 2 === 0
    ? `${num} is even number`
    : !+num % 2 === 0
    ? `${num} is odd number`
    : `please insert a valid number .`;
console.log(evenNum);
