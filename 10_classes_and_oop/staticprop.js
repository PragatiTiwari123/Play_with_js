class user{
    constructor (username){
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return Math.floor(Math.random()*1000+1)
    }
}

const Pragati = new user('pragati')
// console.log(Pragati.createId())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new teacher('iphone','iphone@gmail.com')
iphone.logMe()
// console.log(iphone.createId())