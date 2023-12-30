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

const books=[
    {
        title : "Book one" , genre : "Non-fiction" , publish : 1980 , edition : 1989
    },
    {
        title : "Book two" , genre : "History" , publish : 2000 , edition : 2005
    },
    {
        title : "Book three" , genre : "Non-fiction" , publish : 1989 , edition : 2000
    },
    {
        title : "Book four" , genre : "Science" , publish : 1985 , edition : 1989
    },
    {
        title : "Book five" , genre : "History" , publish : 2010 , edition : 2014
    },
    {
        title : "Book six" , genre : "General knowledge" , publish : 2012 , edition : 2019
    },
    {
        title : "Book seven" , genre : "Non-fiction" , publish : 1998 , edition : 2008
    },
    {
        title : "Book eight" , genre : "Science" , publish : 1983 , edition : 1985
    },
]

let userBooks = books.filter( (bk) => bk.genre === "History");
userBooks = books.filter( (bk) =>{
    return bk.publish>2000 && bk.genre==="History"
})
console.log(userBooks);