// Strict mode

"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const private = "524"; // strict mode reseved word variables
// const interface = "Audio"; // strict mode reseved word variables
*/

// functions
/*
function logger() {
  console.log("My name is Mantas");
}

// calling / runing / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23"); 
console.log(num); //consoles can also bet considered as functionsr

function paperManufacturer(paper, hardPaper) {
  const types = `We desclare the amount of ${paper} paper and ${hardPaper} hardpaper`;
  return types;
}

const paperValues = paperManufacturer(10, 20);
console.log(paperValues);

*/

// function declarations vs. expressions
// function declaration
/*
function calcAge1(birthYear) {
  // const age = 2021 - birthYear;
  return 2021 - birthYear;
}

const age1 = calcAge1(1990); //you can call this before th function
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1991); // you cannot call this before th function
console.log(age1, age2);
*/

//arrow function
/* 
const calcAge3 = (birthYear) => 2021 - birthYear;
const age2 = calcAge3(1990);
console.log(age2);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, "Mantas"));
console.log(yearsUntilRetirement(1995, "Bill"));
*/

// functions calling other functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired! `);
    return -1;
  }
};

console.log(yearsUntilRetirement(1990, "Mantas"));
console.log(yearsUntilRetirement(1967, "Rinaldas"));
*/

//Coding challenge 1 Functions
/*
const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;
let avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No team wins`);
  }
};

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins);
console.log(avgKoalas);
checkWinner(avgDolphins, avgKoalas);
*/

//Arrays (data structures)
/*
const friend1 = "James";
const friend2 = "Jeremy";
const friend3 = "Richard"; //this can be tiresome to call everyone as a variable

const friends = ["James", "Jeremy", "Richard"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); //array but less usual
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = "Rokas"; //changing array element
console.log(friends);
// const friends = ["Vytautas", "Mindaugas"]; // cannot declare a new same array

const firstName = "Mantas";
const Mantas = [firstName, "Smith", 2021 - 1990, "musician", friends];
console.log(Mantas);
console.log(Mantas.length);

//exercise

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 1967, 1940, 1986];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
/*
//basic array operations(methods)
const friends = ["James", "Jeremy", "Richard"];

//add elements
const newLength = friends.push("Jonas"); //ads an additional element in the end. Push function
console.log(friends);
console.log(newLength); //push function returns ne array lenght

friends.unshift("Vytautas"); //ads an additional element in the beginning
console.log(friends);

//remove elements
friends.pop(); //removes element in the end.
const popped = friends.pop(); //removes element in the end.
console.log(popped); // shows the removed element as it removes
console.log(friends);

friends.shift(); // removes First element
console.log(friends);

console.log(friends.indexOf("Jeremy")); // returs Jeremy number
console.log(friends.indexOf("Gitanas")); // returns -1 nes neegzistuoja

friends.push(23);
console.log(friends.includes("Gitanas")); // returns if it is in the array or not FALSE
console.log(friends.includes("James")); // returns if it is in the array or not TRUE
console.log(friends.includes(23));

if (friends.includes("James")) {
  console.log(`You have a friend called James`);
}
*/
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) =>
//  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];
console.log(bills, tips, totals);
*/

// Introduction to Objects
/*
const mantasArray = [
  "Mantas",
  "Smith",
  2021 - 1990,
  "musician",
  ["James", "Jeremy", "Richard"],
];

const mantas = {
  firstName: "Mantas",
  lastName: "Smith",
  age: 2021 - 1990,
  job: "musician",
  friends: ["James", "Jeremy", "Richard"],
};
console.log(mantas);
*/

// Dot vs. Bracket Notation
/*
const mantas = {
  firstName: "Mantas",
  lastName: "Smith",
  age: 2021 - 1990,
  job: "musician",
  friends: ["James", "Jeremy", "Richard"],
};
console.log(mantas);

console.log(mantas.lastName);
console.log(mantas["lastName"]);

const nameKey = "Name";
console.log(mantas["first" + nameKey]);
console.log(mantas["last" + nameKey]);
*/

// does not work console.log(mantas."first" + nameKey)

/*const intersestedIn = prompt(
  "What do you want to know about Mantas? Choose between firstName, lastName, age, job, friends"
);

if (mantas[intersestedIn]) {
  console.log(mantas[intersestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, friends"
  );
}
*/
/*
mantas.location = "Lithuania";
mantas["instagram"] = "mantas";
console.log(mantas);
mantas.length;
// Challenge
// "Mantas has 3 friends, and his best friend is called James"
// get mantas, get 3, get James

// tried this
console.log(
  mantas.firstName,
  `has`,
  mantas.friends.length,
  `friends, and his best friend is called`,
  mantas.friends[0]
);

//figured this
console.log(
  `${mantas.firstName} has ${mantas.friends.length} friends, and his best friend is called ${mantas.friends[0]}`
);
*/

// Object Methods
/*
const mantas = {
  firstName: "Mantas",
  lastName: "Smith",
  birthYear: 1990,
  job: "musician",
  friends: ["James", "Jeremy", "Richard"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  checkLicence: function () {
    if (this.hasDriversLicense === true) {
      return `a drivers license`;
    } else {
      return `no drivers license`;
    }
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      mantas.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(mantas.calcAge());
console.log(mantas.age);
console.log(mantas.calcAge());
console.log(mantas.calcAge());
console.log(mantas.calcAge());
console.log(mantas.calcAge());
// console.log(mantas["calcAge"](1990));
console.log(mantas);

// Challenge
// "Mantas is a 27 year old musician, and he has a/no driver's license"

//my variant
console.log(
  `${mantas.firstName} is a ${mantas.age} year old ${
    mantas.job
  } and he has ${mantas.checkLicence()}`
);

console.log(mantas.getSummary());
*/
// coding challeng 3

/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  getBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(mark.getBMI());

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  getBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(john.getBMI());

console.log(
  `${mark.getBMI() > john.getBMI() ? mark.fullName : john.fullName}'s BMI ${
    mark.getBMI() > john.getBMI() ? mark.getBMI() : john.getBMI()
  } is higher than ${
    mark.getBMI() < john.getBMI() ? mark.fullName : john.fullName
  }'s ${mark.getBMI() < john.getBMI() ? mark.getBMI() : john.getBMI()}!`
);
*/

// Iteration The for Loop

// console.log("Lifting weights repetition  1");
// console.log("Lifting weights repetition  2");
// console.log("Lifting weights repetition  3");
// console.log("Lifting weights repetition  4");
// console.log("Lifting weights repetition  5");
// console.log("Lifting weights repetition  6");
// console.log("Lifting weights repetition  7");
// console.log("Lifting weights repetition  8");
// console.log("Lifting weights repetition  9");
// console.log("Lifting weights repetition  10");

// for loop keeps running while condition is TRUE

/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

//Looping Arrays, Breaking and Continuing
/*
const mantasArray = [
  "Mantas",
  "Smith",
  2021 - 1990,
  "musician",
  ["James", "Jeremy", "Richard"],
  true,
];

const types = [];

for (let i = 0; i < mantasArray.length; i++) {
  // Reading from mantas Array
  console.log(mantasArray[i], typeof mantasArray[i]);

  // Filling types array
  // types[i] = typeof mantasArray[i];

  types.push(typeof mantasArray[i]);
}

types[0] = "string";

console.log(types);

const years = [1992, 2008, 1966, 2019];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

//  continue and break
console.log("-----ONLY STRINGS-----");
for (let i = 0; i < mantasArray.length; i++) {
  if (typeof mantasArray[i] !== "string") continue;
  console.log(mantasArray[i], typeof mantasArray[i]);
}

console.log("-----BREAK WITH NUMBER-----");
for (let i = 0; i < mantasArray.length; i++) {
  if (typeof mantasArray[i] === "number") break;
  console.log(mantasArray[i], typeof mantasArray[i]);
}

for (let votes = 0; votes <= 50; votes++) {
  console.log(`Voter number ${votes} is currentyly voting`);
}
*/

// looping backwards and loops in loops
/*
const mantasArray = [
  "Mantas",
  "Smith",
  2021 - 1990,
  "musician",
  ["James", "Jeremy", "Richard"],
];

for (let i = mantasArray.length - 1; i >= 0; i--) {
  console.log(i, mantasArray[i]);
}

// 3 exercises

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----starting exercise ${exercise}----`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♂️`);
  }
}
*/

// The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
/*
let rep = 1;

while (rep <= 10) {
  console.log(` WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

//Coding challenge no: 4
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};
calcAverage([2, 6, 7]);

console.log(calcAverage([2, 6, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
