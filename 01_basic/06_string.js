const name="pragati ";
const repoCount = 5;
// console.log(name + repoCount + " Value");
console.log(`Hello My name is ${name} and my repocount is ${repoCount}`); // worked yet

const gameName=new String("Pragati-ap-com"); 
//String --> Object
//invoking an object
//key : value pair

//Methods used with String
console.log(gameName[0]); //P
console.log(gameName.__proto__); //{}
console.log(gameName.length); //7
console.log(gameName.toUpperCase()); //PRAGAti but doesnot change the actual string #STACK
console.log(gameName.charAt(4)); //a value at particular index
console.log(gameName.indexOf("t")); //5 but if that character doesnot exist then returns -1

const newString=gameName.substring(-8,4); //in subString it ignores the negative indexing and starts from 0
console.log(newString+"u"); //Prag + "u" == Pragu

// const anotherString=gameName.slice(-8,4);  //not working
// console.log(anotherString);

//Trim and Replace

const newStringOne="        Pragati     "
console.log(newStringOne);
console.log(newStringOne.trim()); //revome the spaces
//works only in whitespaces not in line terminator

const url="https://pragati.com/pragati%20tiwari" // " " i.e. spaces == %20 automatically convert from browser
console.log(url.replace("%20","-"));

console.log(url.includes("pragati")); //true
console.log(url.includes("sundar")); //false

console.log(gameName.split("-")); //.split("splitter",limit)

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
console.log(`Fifteen is ${a + b}`);

//it is `` not ''
const gameName1="Pragati"
const anotherStrin=gameName1.slice(-8,4) //Interesting thing is we even give negative values too
console.log(anotherStrin) //Prag