// OBJECT LITERALS

const user = {
    userName : 'P',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(this);
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());

const user2 = {
    userName : 'A',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(this);
    }
}

// constructor function

//return new copy i.e., instance

// const promisOne = new Promise(); //new context
// const date = new Date();

function User(userName,loginCount,signedIn) {
    this.userName = userName;
    this.signedIn =signedIn;
    this.loginCount = loginCount;

    // return this is not mandatory
}
// const useOne = User("pragu",8,true);
// const useTwo = User("a",8,false);
// console.log(useOne);
// if we do not use new keyword then it overwrite the values either we print it or not

const useOne =new User("pragu",8,true);
const useTwo =new User("a",8,false);
console.log(useOne.constructor);
// console.log(useOne);
// console.log(useTwo);

// instanceOf