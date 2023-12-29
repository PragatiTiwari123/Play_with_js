const score= 12;
console.log(score); //12
const balance = new Number(100);
console.log(balance); //[Number: 100]
//Methods in Number

console.log(balance.toString()); //100
console.log(balance.toString().length); //3
console.log(typeof balance.toString()); //String

console.log(balance.toFixed(2)); //100.00
console.log(balance.toFixed(1)); //100.0

const otherNumber = 23.0944
console.log(otherNumber.toPrecision(3)); //23.1 Returns string 

const otherNumber1 = 123.8944
console.log(otherNumber1.toPrecision(3)); //124
//3 means only 3 avlues would be there with the rounding-off the decimal value

const hundredths= 100000000
console.log(hundredths.toLocaleString());//10,00,000
console.log(hundredths.toLocaleString('en-IN'));//10,00,000

//mAx_Value Min_Value

//***************************************** MATHS *******************************************

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)); //-4==4 return 4

console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.6)); //4

console.log(Math.sqrt(81)); //9

console.log(Math.min(6,2,8,1)); //1
console.log(Math.max(6,2,8,1)); //8

console.log(Math.random()); //0 to 1
console.log(Math.floor(Math.random()*10) + 1);

const min= 10
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min)  //random value between 11-20