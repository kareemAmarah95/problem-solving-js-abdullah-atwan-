let age = 100; //TRY ASSIGNING A VALUE TO THIS VARIABLE
if (age >= 18 && age <= 50) {
  console.log(`You are an adult`);
} else if (age >= 50) {
  console.log(`You are an old man`);
} else if (age <= 18 && age >= 0) {
  console.log(`You are toddler`);
} else {
  console.log(`Invalid Input`);
}
