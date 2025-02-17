// singleton  : hamesha constructor se banega
// object.create    (constructor method)

//object literals

const mySym = Symbol("key1");
// console.log(typeof mySym);
// console.log(mySym);


const JsUser = {
    name: "Pranav",
    "full name" : "Pranav Tiwari",
    [mySym]: "newKey", //syntax to write symbol
    age: 32,
    location: "Pune",
    email: "pranav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.age);  //dot notation se object ko access krte hain
// console.log(JsUser["full name"]); // square notation se bhi access krte hain

// console.log(JsUser[mySym]);

//how to change value in object

JsUser.email = "pranav@chatgpt.com"; //can override value with =
// console.log(JsUser.email);

//freeze(): Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

// Object.freeze(JsUser) //prevents further modifications in values
JsUser.email = "pranav@microsoft.com"
console.log(JsUser);

//funcitons in JS

JsUser.greeting = function(){
    console.log("Hello User");
    
}
console.log(JsUser.greeting);  //function returnback
console.log(JsUser.greeting());  

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());
