function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yob}`);
}

function yearOfBirth(age) {
  return 2017 - age;
}

whoAmI()

