const myArr = [0,1,2,3,4,5,true,"Pragati"] 
// Resizable we can change the size of an array
// Add any type of data in an array
// value can be accessed through index values --> 0 based
// array make shallow copies, Shallow copy of an object whose propertiies share the reference point 
const myArr1 = [0,1,2,3,4,5] 
const myArr2 = ["Pragati","Shakti"]

const myArr3 = new Array(1,2,3,4)
console.log(myArr1[1]);


// Array methods

myArr1.push(6) //add in last
myArr1.push(10)
myArr1.pop() //remove the last 

myArr1.unshift(9) //add in first
myArr1.shift() //remove the first 
console.log(myArr1);

console.log(myArr1.includes(9)); // boolean
console.log(myArr1.indexOf(19)); // -1 (not exist)
console.log(myArr1.indexOf(3));

const newArr = myArr1.join()

console.log(myArr1);
console.log(newArr);
console.log(typeof newArr); //string

//slice and splice

console.log("A",myArr1);
const myn1 = myArr1.slice(1,3)
console.log("After slicing : A ",myArr1);
console.log(myn1);
console.log("B",myArr1);
const myn2 = myArr1.splice(1,3)
console.log("After splicing : B ",myArr1);
console.log(myn2);

