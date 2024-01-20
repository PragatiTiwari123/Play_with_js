// ES6

class user{
    constructor(username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass
    }
    encryptPassword(){
        return `${this.pass}abc`
    }
    updateUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user('chai','chai@gmail.com','123')
console.log(chai.encryptPassword());
console.log(chai.updateUsername());

// BTS

function User(username,email,pass){
    this.username=username
    this.email=email
    this.pass=pass
}
User.prototype.encryptPassword=function(){
    return `${this.pass}abc`
}
User.prototype.updateUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user('tea','tea@gmail.com','123')
console.log(tea.encryptPassword());
console.log(tea.updateUsername());