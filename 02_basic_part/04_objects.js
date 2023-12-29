const tinderUser = new Object()
// const tinderUser={}
tinderUser.id="123"
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser={
    email : "a@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Akarsh",
            lastname:"Tiwari"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// console.log(regularUser.fullname?.userfullname.firstname);
// ? used to ensure wheather there is a value or not 

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//merging obj2 into obj1
const obj3=Object.assign({},obj1,obj2) //const obj3=Object.assign(obj1,obj2) --> when we use {} then it is gauranted that it converts into a single abject and copied into {}
//Here const obj3=Object.assign(target,source)
console.log(obj3) //objects are lil bit similar to set i.e. it contains only one copy of the key

const o1={1:"a",2:"b"}
const o2={3:"a",4:"b"}
const o3={5:"a",6:"b"}
// const o4=Object.assign({},o1,o2,o3) 
const o4 ={...o1,...o2,...o3}  //spreading
console.log(o4)

const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged')) 

//************************************OBJECT DESTRUCTURING***********************************
const course = {
    coursename : "JS in hindi",
    price : 5000,
    instructor : "Hitesh"
}
// course.instructor
const {instructor : inst} = course
// console.log(instructor);
console.log(inst);
//React method--> Destructing
// const navbar = ({company}) =>{ //props.company
// }
// navbar(company = "Hitesh")

//************************************************************API AND JSON*************************************************************

//json - java script object notation --> might be array or object

// {
//     "name":"hitesh",
//     "coursename" : "JS",
//     "price" : "Free"
// }

// API's --> randomuserly api
//json --> json formatter
