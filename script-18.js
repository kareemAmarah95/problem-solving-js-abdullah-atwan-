"use strict";
let result, a, b, c;
console.log(undefined);
// const this = "hello world"
// مينفعش تسمي إسم متخزن في الjs
const hello = `hello world`;
// console.log(var(1,2,4))

// function var(this, NaN, undefined){
//     return `${this + NaN + undefined}`
// }

function sum(a, b, [...c]) {
  result = +a + +b + [...c].reduce((acc, currVal) => acc + currVal);
  return result;
}
console.log(sum(1, 2, [1, 2, 3]));
const arr = (name) => {
  this.name = `fatheya`;
};

// var undefined = null;
const name = null;

// أتمنى أكون عند حسن ظنك
