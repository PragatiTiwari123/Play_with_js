//object 2 tarah se declare krte h 
//through literals and through constructor
//singleton --> when with constructor we make object
//literals k through singleton nhi bnta h 

//Object.create     through constructor

const mySys = Symbol("key1")
const mySys1 = Symbol("key2")

const jsUser={
    name: "Akarsh",
    "Full name":"Akarsh Tiwari",
    [mySys]:"mykey2",
    mySys1:"mykey1",
    agr:10,
    location:"Kanpur",
    email: "a@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}     //literal object

console.log(jsUser.email);
console.log(jsUser["email"]);
//console.log(jsUser.Full name);  throws an error because it cannot be applicable on . accessing 
console.log(jsUser["Full name"]);
console.log(typeof jsUser.mySys1); //String we write mySys1 in key
console.log(typeof jsUser[mySys]); //String we write [mySys] in key
console.log(jsUser[mySys]); 
//object --> key value

jsUser.email="a@github.com"
// Object.freeze(jsUser)
jsUser.email="a@google.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting()); 

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetingTwo); //undefined
console.log(jsUser.greetingTwo()); 