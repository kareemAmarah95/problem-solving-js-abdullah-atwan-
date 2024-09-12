let firstName, lastName, fullName;
const Hi = (firstName, lastName) => {
  fullName = `${firstName} ${lastName}`;
  return `Welcome to the TEAM ${fullName}`;
};

console.log(Hi("Kareem", "Amara"));
