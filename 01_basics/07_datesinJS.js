//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(typeof myDate);

let myCreatedDate = new Date(2025, 1 , 15);
console.log(myCreatedDate.toDateString());

let anotherDate = new Date(2025, 1 , 15,5,3);
console.log(anotherDate.toLocaleString());

let newDate = new Date("02-15-2025");
console.log(newDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);

console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000)); //converting milliseconds to seconds

//********************* */

let myDate1 = new Date();
console.log(myDate1);
console.log(myDate1.getMonth()+1);
console.log(myDate1.getDay());


console.log(`${myDate1.getDay()} and the time is`) ;//writing in string interpolation

//*************** */

newDate.toLocaleString('default', {
    weekday: "long",
})


