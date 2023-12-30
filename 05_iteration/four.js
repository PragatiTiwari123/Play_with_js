const myObject={
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
    // console.log(key); // key
    // console.log(myObject[key]); //value
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in Arrays

const programming = ["js" , "rb" , "py" , "java" , "cpp"]
for (const key in programming) {
    // console.log(key); // index values
}
for (const key in programming) {
    // console.log(programming[key]); // index values
}

// for in Map

const map=new Map();
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
    // console.log(key);   // no output
}