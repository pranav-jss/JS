//array //javascript arrays are resizable
//in array object we can store collection of items(can contain of mix datatype) under single variable
//JS array copy operations create shallow copies rather than deep copies

const myArr = [0,1,2,3,4,5];
const heroes = ["iron man", "thor"];

const myArr2 = new Array(1,2,4,8)
console.log(myArr2[2]);
console.log(heroes[1]);

//Array methods

myArr.push(6); //adds new element to array and returns new length
myArr.pop();//last value will be removed
myArr.unshift(9); //insert new element to start of array
myArr.shift(); //removes the first element of the array
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.includes(2));
console.log(myArr.indexOf(3));

const newArr = myArr.join(); //adds all elements of an array into a string
console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr); //string

//slice  splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3); //returns those elements whose index value has been passed to it and does not include the last value but it does not impact the original array
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3);// removes the elements from the original array as well.
console.log(myn2);
console.log("C ", myArr);
