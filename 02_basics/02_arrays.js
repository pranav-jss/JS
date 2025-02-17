const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

//push operator
// marvel_heroes.push(dc_heroes); // add array as an element to end of the array and returns new length. It works on existing array
// console.log(marvel_heroes); // in output dc_heroes appears as a new element 
// console.log(marvel_heroes[3][1]);

//concat operator
const all_heroes = marvel_heroes.concat(dc_heroes) // combines two or more arrays and returns a new array. A new variable has to be define to hold new array
console.log(all_heroes);

//spread operator  : it expand and array into elements (although work similar to concat)
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

//flat() method : creates a new array with all sub-array elements concatenated into it
const another_array = [1,2,3,[4,5],6,7,[8,9,[10,11]]];
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);

// isArray() method:
console.log(Array.isArray("pranav"));
console.log(Array.from("pranav"));

console.log(Array.from({name:"pranav"}));  //interesting concept for interview prep
//returns empty array bcz it cannot convert data from key pairs. 

// of() : creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

