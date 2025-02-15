//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
//JavaScript is a dynamically typed language which means the type of a variable is determined at runtime.
//It is different than a statically typed language in which the type of a variable is known at compile time.

// primitive datatypes (7types):
// Number, String, BigInt, Boolean, Undefined, Nill, Symbol

const score = 300;
//const score:number = 300;  // typescript code

const name = "pranav";
const tradingNum = 25984532103369n;
const isLoggedIn = false;
let userCity;
const outsideTemp = null;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);


//Non-primitive datatypes (Reference type):
// object, array, function

//array:
const superheros = ["thor", "ironman", "captain america", "hulk" ]

//object
let myObject={
    name: "pranav",
    age: 22,
}

const myFunction = function (){
    console.log("hello world");  //typeof is object function.
}

console.log(typeof tradingNum); //typeof is bigInt
console.log(typeof myFunction);
console.log(typeof id);
console.log(typeof superheros); //typeof is object

//.........................................................

//Memory : Stack memory and heap memory
// stack memory and heap memory
// stack memory (used in primitive datatypes) (change in copy)
//heap memory (used in non-primitive datatypes) (change in original value)

let myYoutubeName = "codingdotcom";
let anotherYoutube = myYoutubeName;
console.log(anotherYoutube);
console.log(myYoutubeName);

anotherYoutube = "finalcodedotcom"
console.log(myYoutubeName);
console.log(anotherYoutube);

//in above example there we get a copy from myYoutubeName and the changes happen in anotherYoutube will be changed in the copy and not in its original value/memory

//heap

let user1 = {
    name: "pranav",
    email: "pratgmaildotcom",
}

let user2 = user1;

console.log(user1.email);
console.log(user2.email);

user2.email="propdotcom";

console.log(user1.email);
console.log(user2.email);

//changes happen in heap or user2 will happen in user1 also