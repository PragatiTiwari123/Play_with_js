"use strict"; //treat all code as newer version in whole file

// alert( 3 + 3); We are using nodejs not browser

//code readibility should be high


//*****************PRIMITIVE DATATYPE******************

//string 
let char="Pragati";
let char1='Khushi';

//integer
let num=10;

//boolean
let t=true;

//null -->object
let a=null;

//undefined
let a1;
let a2=undefined;

console.table([char,char1,num,t,a,a1,a2]);

//typeof is used to define the type of variable
//semicolon is not mandatory in javascript codes
console.log(typeof(a1));
console.log(typeof(a));

const id=Symbol('123')
const aid=Symbol('123')
console.log(id==aid);

const BigNumber = 123445443412123214n //BigInt
console.log(typeof BigNumber);

//**************************NON PRIMITIVE DATATYPE**********************

const heroes=['shaktiman','spiderman','Ram ji'] //Arrays
let myObj={
    name:'Pragati',
    age:20,
}//object --> key:value pair
const myfunc=function(){
    console.log("Hello World");
} //function

console.log("Primitive Datatype");
console.log(typeof char);
console.log(typeof char1);
console.log(typeof num);
console.log(typeof t);
console.log(typeof a);
console.log(typeof a1);
console.log(typeof a2);
console.log(typeof id);
console.log(typeof BigNumber);
console.log("Non Primitive Datatype");
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myfunc);

//***********************************************

console.log("Stack in JS");

let name = "Pragati"
let anoName = name
console.log(anoName);
anoName = 'Khushi'
console.log(name);
console.log(anoName);

console.log("Heap in JS");

let userOne={
    email:"p@gmail.com",
}
let userTwo = userOne;
console.log(userOne);
console.log(userTwo);
userTwo.email="a@gmail.com";
console.log(userOne);
console.log(userTwo);