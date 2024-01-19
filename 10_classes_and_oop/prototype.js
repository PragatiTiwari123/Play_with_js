let myName = "pragati     "
let myChn = "chai     "

// console.log(myName.truelength); => property 
// console.log(myName.trim().length);

let myHeros = ['thor','spiderman']
let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prgti = function(){
    // console.log(`present in all the object`);
}
// heroPower.prgti()
myHeros.prgti()

Array.prototype.hyeprgti = function(){
    console.log(`say hello`);
}
// myHeros.hyeprgti()
// heroPower.heroPower()  => not accessible


// Inheritance

const user = {
    name :'chai',
    email : 'chai@gmail.com'
}
const teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}
teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUser = 'Chai           '
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUser.truelength()
'pragati  '.truelength()