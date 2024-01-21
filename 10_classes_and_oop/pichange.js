const descripter = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

descripter.writable=true;
descripter.enumerable=true;
// descripter.configurable=true;
descripter.value = 5
console.log(descripter);

console.log(descripter.value);