const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach(function (item) {
    // console.log(item);
})
// console.log(values); //undefined : when return nothing

const values1 = coding.forEach(function (item) {
    // console.log(item);
    return item;
})
// console.log(values1); //undefined : when return something

//i.e. nothing is returned in forEach 

const myNums = [1,2,3.4,5,6,7,8,9,10]
myNums.filter( (num) => num>4) //return something,, so we do need variable to hold
const newNums=myNums.filter( (num) => num > 4)
// console.log(newNums);

const newNums1=myNums.filter( (num) => {
    return num > 4 //return is must in scope of arrow function
})
// console.log(newNums1);

//Same thing using forEach()

const newNums2=[]
myNums.forEach( (num) => {
    if (num>4) {
        newNums2.push(num);
    }
} )
// console.log(newNums2);

