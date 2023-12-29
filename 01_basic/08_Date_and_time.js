// Dates

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //Object

let myCurrentDate = new Date(2023,10,29) //here it starts from 0
console.log(myCurrentDate.toDateString());

let myCurrentDate1 = new Date(2023,10,29,5,3)
console.log(myCurrentDate1.toLocaleString());

let myCurrentDate2 = new Date("2023-01-18") //DD-MM-YY starts from 1
console.log(myCurrentDate2.toLocaleString());

let myCurrentDate3 = new Date("01-18-2023")
console.log(myCurrentDate3.toLocaleString());

//Timestamp

let myTimestamp = Date.now()

//seconds in miliseconds since from 1st jan so that substract it get the amount of left time
console.log(myTimestamp);
console.log(myCurrentDate3.getTime());

console.log(Math.floor(Date.now()/1000)); //Interveiw regarding Important --> comparison of seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time is`);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));