// for of
//["" , "" , ""]
//[{} , {} , {}]

const arr = [1,2,3,4,5]

for (const i of arr) { //object means variable name
    // console.log(i);
}

const greeetings="Hello World"
for (const greet of greeetings) {
    // console.log(`each char is ${greet}`);
}

const map=new Map();
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

//OUTPUT : 
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'Fr' => 'France'
//   }

for (const key of map) {
    // console.log(key);
}

//output
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]

for (const [key,value] of map) {
    // console.log(key , ':-', value);
}

//OUTPUT
// IN :- India
// USA :- United State of America
// Fr :- France

// const myObject={
//     'game1' : 'NFS',
//     'game2' : 'SpiderMan'
// }

// for (const [key,value] of myObject) {
//     console.log(key , ':-', value);
// } // throws error object is not iterable

// const myObjec1t={
//     game1 : 'NFS',
//     game2 : 'SpiderMan'
// }

// for (const [key,value] of myObjec1t) {
//     console.log(key , ':-', value);
// } // throws error object is not iterable