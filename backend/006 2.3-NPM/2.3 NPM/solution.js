// var generateName = require("sillyname");
import generateName from "sillyName";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${name}!`);
