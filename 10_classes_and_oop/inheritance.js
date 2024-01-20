class user {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`User name is ${this.username}`);
    }
}

class teacher  extends user{
    constructor(username,email,pass){
        super(username);
        this.email=email;
        this.pass=pass
    }
    addCourses(){
        console.log(`New course is added by ${this.username}`);
    }
}

const chai = new teacher('chai','chai@gmail.com','123')
chai.addCourses()
chai.logMe()

const masalaChai = new user('masalaChai')
// masalaChai.addCourses() not accessible
masalaChai.logMe()

console.log(chai instanceof teacher);
console.log(chai instanceof user);