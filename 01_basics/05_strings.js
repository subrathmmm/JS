const name = "subrat"
const repoCount = 40;
// console.log(name + repoCount + " value")
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('su-br-tt');

console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString)

const newStringOne = "    subrat   ";
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));