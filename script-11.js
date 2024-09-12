let person; // try assigning any value here to this variable
const age =
  +person >= 18
    ? `You can Vote , you are 18 or older`
    : +person <= 0
    ? `Sorry You Can't Vote , You are not adult`
    : `Invalid Input`;
console.log(age);
