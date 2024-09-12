let param1, param2, result, allParams;
const sumOfParams = (param1, param2, [...allParams]) => {
  result =
    param1 + param2 + [...allParams].reduce((acc, currVal) => acc + currVal);
  return result;
};

console.log(sumOfParams(1, 2, [4, 5, 1]));
