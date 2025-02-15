let score = "";
console.log(typeof score); //we can write like this
console.log(typeof (score)); //we can write like this as a method aslo. both way are correct

let valueInNumber = Number(score); //created a variable valueInNumber then create NumberConstructor and then pass score as value.

console.log(typeof valueInNumber); // typeof is number coz we declared it as number
console.log(valueInNumber); // valueInNumber is NaN (Not a Number) bcz 33abc is NaN. only datatype is converted to number.

//"33" => 33
// "33abc" => NaN
// true => 1
// false => 0
//null => 0
// undefined => NaN
// "" => 0

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn); // typeof will be boolean bcz we decalred it ias boolean
console.log(booleanIsLoggedIn); 

// 1=> true
// 0=> false
// "" => false
//"pranav"=> true
// null=> false
// undefined => false

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
