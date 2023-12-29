function sayMyname(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
// sayMyname --> function refrence
// sayMyname() --> function execution

function addTwoNum(num1,num2){ //parameter
    console.log(num1+num2);
}
addTwoNum() //NaN
addTwoNum(3,4) //arguments 7
addTwoNum(3,"4") //34
addTwoNum(3,"a") //3a
addTwoNum(3,null) //3

let res=addTwoNum(2,7)
console.log("Result = ",res); 

function loginuserMessage(username){ //parameter
    if(username===undefined){
        console.log("Please enter a username");
        return;
    }
     return `${username} just logged in`
 }
console.log(loginuserMessage("hitesh"));
console.log(loginuserMessage(""));
console.log(loginuserMessage());

function calc_price(...num1){ //... --> rest operator to hold more than one parameter int one argum as array
    return(num1)
}
function calc_price1(val1,val2,...num1){ //... --> rest operator to hold more than one parameter int one argum as array
    return(num1)
}
console.log(calc_price(200,400,500)); //if rest operator is not used then first value would be initialized
console.log(calc_price1(200,400,500));

const user = {
    username : "Pragati",
    prices : 188
}
function handleObject(anyobject){ //pass any object as argument
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}
// handleObject(user)
handleObject({
    username : "Sam",
    prices : 5000
})

const myNewArray = [200,100,300,400]

function returnSecondValue(getArray){ //array as an argument
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400,5000,400,600]));