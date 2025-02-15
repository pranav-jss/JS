const name = "pranav"
const repoCount = 2;

console.log(name + repoCount + " value"); //outdated syntax

//new syntax: use backticks (``). string interpolation in which we make placeholders and inject variables into them. foe ex:

console.log(`my name is ${name} and my repo count is ${repoCount}`); //always write like this


const gameName = new String("Pranav-pt-com");
console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4); // in slice we can use negative values
console.log(anotherString);

const newStringOne = "      pranav     ";
console.log(newStringOne);
console.log(newStringOne.trim());  //trim removes white spaces 

const url ="pranav.com/%20homepage";
console.log(url.replace('%20', '-'));
console.log(url.includes('pranav'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));