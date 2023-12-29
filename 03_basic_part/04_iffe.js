//Immediately Invoked function Expression (IFFE)

function chai(){
    console.log("DB COONECT");
}
chai();
//To stop the pollution from the global variable in a particular function
//here we use iffe function

//iffe
(function chai(){
    console.log("DB COONECT");
})(); //immediately called function

// ()(); //function definition //function execution

//named iffe

(function aurcode(){
    console.log("DB CONNECTED TWO");
})(); //; semicolon is mandatory in iffe

//simple iffe

(()=>{
    console.log("DB CONNECTED TWO");
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('pragati') 