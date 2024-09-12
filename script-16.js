let firstName = "Kareem",
  age = 29,
  hobbies = ["cooking", "coding", "travelling"];

console.log(
  `My Name Is ${firstName} , I'm ${age} years old , My Hobbies Are ${hobbies.map(
    (hobby) => `${hobby} `
  )}`
);
