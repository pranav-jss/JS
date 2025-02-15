console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2==1);
console.log(2!=1);

// problem occurs when we compare with two different datatypes

console.log("2" <1);
console.log("2">1);

console.log(null > 1);
console.log(null == 1);
console.log(null < 1);
console.log(null ==0);
console.log(null <=0);
console.log(null >=0);

//the reason is that the equality check == and comparisions < > <= >= work differently.
//Comparisions convert null to a number, treating it as 0. That's why null >=0 is true and null <0 is false

console.log(undefined == 0); // false in case of undefined
console.log(undefined <= 0);
console.log(undefined >= 0);

// strict check ===

console.log("2" ==2); // output is true bcz here conversion if going on
console.log("2"===2); // output is false bcz strict check also check their datatypes and conversion does not happen

// this is only to understand the working of JS and its inconsistency here in converison.
// Always try to avoid such types of converisons and comparision.
// clean code has heighest priority

