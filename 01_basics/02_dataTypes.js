"use strict"; // treat all JS code as newer version

//alert(3+3); // gives an error bcoz we are using node.js and not browser
console.log(3
    +3); //it will run the code and gives output as 6 but never write code like this. ALways write code giving high preference to code readibility.

    let name= "Pranav";
    let age =33;
    let city= "Pune";
    let isLoggedIn=true; // don't writ true in " " else it shows its typeof as string
    let temperature =null; //don't write null in "" (like "null") otherwise it shows string as typeof
    let temperature2;


/*primitive datatypes:
    Number : 2 to the power 53;
    Strings;
    BigInt == extra large numbers. mostly used in trading and facbook like data.
    Boolean == true or false
    Undefined == undefined means value is not assigned
    Null == null is standalone value
    Symbol  == main implementation in React. to identify unique component. figma tools uses symbols

    Non Primitive datatypes:
    object

*/
    

console.log(typeof "Pranav"); // typeof string
console.log(typeof age); // typeof number
console.log(typeof name);// typeof string
console.log(typeof "true"); // typeof string
console.log(typeof isLoggedIn); //typeof boolean
console.log(typeof temperature2); // typeof undefined
console.log(typeof undefined); //typeof undefined
console.log(typeof temperature); // typeof object
console.log(typeof null); //typeof object

