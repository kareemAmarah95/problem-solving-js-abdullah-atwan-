'use strict'

console.log(undefined);
const this = "hello world"

console.log(var(1,2,4)) 

function var(this, NaN, undefined){
    return `${this + NaN + undefined}`
}

const arr = (name) => {
    this.name = `fatheya`
}

var undefined = null;

// أعك كمان و لا كده كفاية 😂😂😂😂😂