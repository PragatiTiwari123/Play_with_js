const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach
// coding.forEach()
// coding.forEach(function name(params) {})
// coding.forEach(function (params) {})

coding.forEach(function (item) {
    // console.log(item);
})

//Arrow function

// coding.forEach( (item) => {} )

coding.forEach( (item) => {
    // console.log(item);
} )

//function as parameter

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

//more parameter in function

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
} )

const myCoding = [
    {
        langName : "JavaScript",
        langFileNamw : "js"
    },
    {
        langName : "Python",
        langFileNamw : "py"
    },
    {
        langName : "java",
        langFileNamw : "java"
    }
]
myCoding.forEach((item)=>{
    // console.log(item);
})
myCoding.forEach((item)=>{
    console.log(item.langName);
})