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

//------------------------**Operations**----------------------------------//

let value = 5;
let negValue = -value;
console.log(negValue);

console.log(2+2); // output will be 4
console.log(2*2); // output will be 4
console.log(2**3); // output will be 8 (2 raise to the power 3)
console.log(2-2); // putput will be 0
console.log(2/2); //output will be 1
console.log(2%3); // (to find remainder) output will be 2

let str1 = "hello";
let str2 = " pranav";
let str3 = str1 + str2;
console.log(str3);

//confusing part:

console.log(1 + 2);  //output is 3
console.log("1" + 2); //output is 12
console.log(1 + "2"); //output is 12
console.log("1" + 2 + 2);  //output is 122
console.log(1 + 2 + "2"); //output is 32

//

console.log(true);  //output is true
console.log(+true);  //output is 1
console.log(+""); //output is 0


let num1, num2, num3;
num1 = num2= num3 = 2+2;  // don't write such complex code, code readibility should be high

let gameCounter = 100;
//gameCounter++;   //postfix operator
++gameCounter;     //prefix operator
console.log(gameCounter);  //output is 101

