let score = "33abc" //might be 33 or might be abc or 33abc that can or can't be change in number

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueNumber= Number(score);
console.log(typeof(valueNumber));//number
console.log(valueNumber);//NaN not a number

let score1 = null

console.log(typeof score1); //object
console.log(typeof(score1)); //object

let valueNumber1= Number(score1);
console.log(typeof(valueNumber1));//number
console.log(valueNumber1);//0 == NaN

let score2 = undefined

console.log(typeof score2); //undefined
console.log(typeof(score2)); //undefined

let valueNumber2= Number(score2);
console.log(typeof(valueNumber2));//number
console.log(valueNumber2);//NaN

let score3 = true

console.log(typeof score3); //boolean
console.log(typeof(score3)); //boolean

let valueNumber3= Number(score3);
console.log(typeof(valueNumber3));//number
console.log(valueNumber3);//1

/*
"33" = 33
"33abc" = NaN --> number datatype
true = 1 false = 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // 1 == true 

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); // "" == false

let isLoggedIn2 = "Pragati";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // "Pragati" == true

// 1 == true 
// "" == false
// "Pragati" == true

let someNumber = 33;
let stringnumber = String(someNumber);
console.log(stringnumber) // 33
console.log(typeof stringnumber); // string