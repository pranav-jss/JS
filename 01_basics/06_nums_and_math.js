const score = 400;
console.log(score);

const balance = new Number (25000000);
console.log(balance);
console.log(balance.toFixed(2));
console.log(balance.toLocaleString('en-IN'));


console.log(balance.toString());
console.log(balance.toString().length);

const otherString = 123.856;
console.log(otherString.toPrecision(3));


//******************************Math***********************//

console.log(Math);  // its an object
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.3));
console.log(Math.sqrt(36));
console.log(Math.min(4,2,5,9,8));
console.log(Math.max(4,2,5,9,8));

console.log(Math.random()); //always gives value between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)))+min)
