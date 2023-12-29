const userEmail = []
if(userEmail){
    console.log("Got the user email");
}else{
    console.log("Don't have user email");
}

if(userEmail.length == 0){
    console.log("Array is empty");
}else{
    console.log("Don't have user email");
}

const emptyObject = {}

if(Object.keys(emptyObject).length == 0){
    console.log("Object is empty") ;
}

//Nullish Coalescing Operator (??)  : null and undefined

let val1;
val1 = 5 ?? 10  //5
console.log(val1);

val1=null ?? 10 //10 safety for null
console.log(val1);

val1 = undefined ?? 15  //15 ignore undefined
console.log(val1);

val1 = null ?? 10 ?? 15  //first value 10
console.log(val1);

// Ternary Operator

//condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log("more than 80") : console.log("less than 80");

//Falsy Values 

// false , 0 , -0 , BignInt 0n . "" , null , undefined , NaN

//truthy Values

// "0" ,'false' , " " , [] , {} , funcyion(){} , -1

if(-1){
    console.log("Got the user email");
}else{
    console.log("Don't have user email");
}

//Array in conditional

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null and undefined

//special case to get data from DB

let val;
// val = 5 ?? 10 //5
// val = null ?? 10 //10
// val = undefined ?? 15 //15

val = null ?? 10 ?? 15 //10

console.log(val); 

// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
const price = iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");