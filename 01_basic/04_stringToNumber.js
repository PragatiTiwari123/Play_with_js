
// **************************** Operation ***************************

let value = 3
let negValue = -value
console.log(negValue); //-3

let str1 = "Hello "
let str2 = "Pragati"

let str3 = str1 + str2
console.log(str3); //Hello Pragati

//it's because of documentation

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 if string in first then treat all as string
console.log(1 + 2 + "2"); // 32 if string in last then perform earlier operation the concatenate the string

console.log(+true); // returns 1
//console.log(true+); through an error 

console.log(+""); // 0

let num1 , num2 , num3;
num1 = num2 = num3 = 2 + 2;

let counter = 100;
counter++;
console.log(counter); // 101 postfix --> value invrement after use

let counter1 = 100;
++counter1;
console.log(counter1); // 101 prefix --> value increment before use