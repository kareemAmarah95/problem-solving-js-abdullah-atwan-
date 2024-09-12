let num, squaredNum;
function getNum(num, squaredNum) {
  squaredNum = `${Math.pow(num, 2)}`;
  return squaredNum;
}

console.log(getNum(8));
