const name = "akshay"
const repoCount = 20

//console.log(name + repoCount + "saode");

//Modern way backtecs "``"

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akshay-saode')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-4, 11)
console.log(anotherString);

const newStringOne = "    akshay    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akshay.com/akshay%20saode"
console.log(url.replace('%20', '-'))

console.log(url.includes('akshay'))
console.log(url.includes('testJS'))


console.log(gameName.split('-'));



