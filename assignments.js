"use strict";
// functions
/*
function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return countryDescription;
}

const finland = describeCountry("Finland", 6, "Helsinki");

const lithuania = describeCountry("Lithuania", 3, "Vilnius");

const latvia = describeCountry("Latvia", 2, "Riga");
console.log(finland, lithuania, latvia);
*/

// function declarations vs. expressions

// declaration
/*
function percentageOfWorld1(countryPopulation) {
  return (countryPopulation / 7900) * 100;
}

const lithuania = percentageOfWorld1(3);
console.log(lithuania);
const latvia = percentageOfWorld1(2);
console.log(latvia);
const finland = percentageOfWorld1(6);
console.log(finland);
*/
// expression
/*
const percentageOfWorld2 = function (countryPopulation) {
  return (countryPopulation / 7900) * 100;
};

const lithuania = percentageOfWorld2(3);
console.log(lithuania);
const latvia = percentageOfWorld2(2);
console.log(latvia);
const finland = percentageOfWorld2(6);
console.log(finland);
*/
/*
const percentageOfWorld3 = (poulation) => (poulation / 7900) * 100;

const lithuania = percentageOfWorld3(3);
console.log(lithuania);
const latvia = percentageOfWorld3(2);
console.log(latvia);
const finland = percentageOfWorld3(6);
console.log(finland);
*/

// functions calling other functions
/*
function percentageOfWorld1(countryPopulation) {
  return (countryPopulation / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const countryDescription = `${country} has ${population} million people which is about ${percentage}% of the world.`;
  return countryDescription;
}

console.log(describePopulation("Lithuania", 3));
console.log(describePopulation("Finland", 6));
console.log(describePopulation("China", 1441));
*/

// Arrays
/*
const populations = [3, 6, 1441, 2];
console.log(populations.length === 4);

const percentageOfWorld1 = function (populations) {
  return (populations / 7900) * 100;
};

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
*/
/*
const neighbours = ["Latvia", "Belarus", "Poland", "Russia"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if (
  neighbours.includes(
    "Germany"
  )
) {
  console.log(`Lithuania has Germany as a neighbour`);
} else {
  console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf("Belarus")] = "Sweden";
console.log(neighbours);
*/
/*
// Introduction to Objects
const myCountry = {
  country: "Lithuania",
  capital: "Vilnius",
  language: "Lithuanian",
  population: 3000000,
  neighbours: ["Latvia", "Belarus", "Poland", "Russia"],
};
console.log(myCountry);
*/
// Dot vs. Bracket Notation
/*
const myCountry = {
  country: "Lithuania",
  capital: "Vilnius",
  language: "lithuanian",
  population: 3,
  neighbours: ["Latvia", "Belarus", "Poland", "Russia"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry.population -= 2;
console.log(myCountry.population);
*/
// Object Methods
/*
const myCountry = {
  country: "Lithuania",
  capital: "Vilnius",
  language: "lithuanian",
  population: 3,
  neighbours: ["Latvia", "Belarus", "Poland", "Russia"],

  describe: function () {
    return `${this.country} has ${this.population} million ${
      this.language
    }-speaking people, ${
      this.neighbours.length
    } neighbouring countries and a capital called ${
      this.capital
    }. The country is ${this.neighbours.length >= 1 ? "not an" : "an"} island.`;
  },
};

console.log(myCountry.describe());
*/
// Iteration The for Loop
/*
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}
*/

//Looping Arrays, Breaking and Continuing
/*
const populations = [3, 6, 1441, 2];

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push((populations[i] / 7900) * 100);
}

console.log(percentages2);
*/

// Looping Backwards and Loops in Loops
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(listOfNeighbours[i]); // delete this line and the exercise is done
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}
*/

// The while loop
/*
const populations = [3, 6, 1441, 2];

let i = 0;
const percentages3 = [];
while (i < populations.length) {
  percentages3.push((populations[i] / 7900) * 100);
  i++;
}
console.log(percentages3);
*/
