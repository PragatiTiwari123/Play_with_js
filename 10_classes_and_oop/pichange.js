const descripter = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

descripter.writable=true;
// descripter.enumerable=true;
// descripter.configurable=true;
descripter.value = 5
// console.log(descripter);

// console.log(descripter.value);

// const myObj = Object.create(obj)
const chai ={
    name: 'ginger-chai',
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("Chai nahi bani");
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false,
})
// console.log(Object.getOwnPropertyDescriptor(chai,'name'))

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
}