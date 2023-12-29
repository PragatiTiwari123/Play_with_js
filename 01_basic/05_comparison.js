// > < >= <= == !=
//comparison of same datatypes --> wahi purana wala

//comparison of different datatype

console.log("2">1); //automatically convert into Number
console.log("02">1);

//sometime, not give predictable result so prefered not a good practice
//avoid such comparison

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true --> value conversion
//equality check == and and comparison > < >= <= works differently
//comparison convert NULL to a number , treating it as 0 

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//comparison i.e. >= or <= and equality i.e. == or === are different in js 

//strict check ===
// not only check the value as well as check the datatype too
console.log("2" == 2); //true compare the values only or we can say convert it into number
console.log("2" === 2); //false