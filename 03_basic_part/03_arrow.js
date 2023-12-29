//object
//this keyword
//arrow function

const user={
    username : "Pragti",
    price : 99,
    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to our website`); //current context
        console.log(this);
    }
}
// user.welcomeMessage(); //Pragti , Welcome to our website
// user.username = "Sam"
// user.welcomeMessage(); //Sam , Welcome to our website

// console.log(this);  //{}  browser k global object is Window object
// 

// this keyword is used in object only
// function chai(){
//     console.log(this);
// }
// chai();
// function chai(){
//     let username1 = "hitesh"
//     console.log(this); //
// }
// chai();   //undefined
// function chai(){
//     let username1 = "hitesh"
//     console.log(this.username1);
// }
// chai(); //undefined

// const chai1 = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai1(); //undefined

const chai1 = () =>{  // arrow function
    let username = "hitesh"
    console.log(this); //{}
    console.log(this.username); //undefined
}
chai1(); 

//***********************************ARROW FUNCTION************************************************* */

//Explicit Return

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4)); //return is important


//Implicit return

// const addTwo = (num1,num2) => (num1+num2) //no need return keyword

// console.log(addTwo(3,4))

//return an object

const addTwo = (num1,num2) => ({username : "hitesh"}) //no need return keyword // curly braces
console.log(addTwo(3,4));