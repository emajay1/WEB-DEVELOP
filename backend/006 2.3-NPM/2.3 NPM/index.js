import generateName from "sillyname";
import superheroes from "superheroes";
var sillyName = generateName();
const name = superheroes[Math.floor(Math.random() * superheroes.length)];

console.log(`this is my name ${sillyName}.`);
console.log(`my new ${name}.`);
