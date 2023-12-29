// if 

// if(condition){ // condition => true/false

//} //{} => scope

const isuserLoggedIn = true;
if(isuserLoggedIn){

}
if(2=='2'){
    console.log("1 executed");
}
if(2==='2'){
    console.log("2 executed");
}
if(2!=3){
    console.log("3 executed");
}
if(2!=="3"){
    console.log("4 executed");
}
// < > <= >= == === != !() !==

// const balance=1000
// if(balance>500) console.log("test"),console.log("test 2 "); //not a good practice

// if(balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userloggedin = true;
const debitcard =true;
const loggedinFromGoogle =false;
const loggedinFromEmail =true;

if(userloggedin && debitcard ){
    console.log("Allow to buy course");
}

if(loggedinFromGoogle || loggedinFromEmail){
    console.log("user logged in");
}



//**************************************************** SWITCH KEYWORD ***********************************************

// switch (key) {
//     case value:

//         break;
//     default:
//         break;
// }

const month = 3 ;

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("Default case matched");
        break;
}
const month1 = "march" ;

switch (month1) {
    case "jan":
        console.log("jan");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("Default case matched");
        break;
}
