let num = 8; // you can try to put your number here and it will print days name
const number = num >= 1 || num <= 7;
switch (number) {
  case num === 1:
    console.log(`saturday`);
    break;
  case num === 2:
    console.log(`sunday`);
    break;
  case num === 3:
    console.log(`monday`);
    break;
  case num === 4:
    console.log(`tuesday`);
    break;
  case num === 5:
    console.log(`wednesday`);
    break;
  case num === 6:
    console.log(`thursday`);
    break;
  case num === 7:
    console.log(`friday`);
    break;
  default:
    console.log(`Invalid Input`);
    break;
}
