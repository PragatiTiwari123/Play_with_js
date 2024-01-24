class Userr{
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}s`
    }
    set password(val){
        this._password = val.toUpperCase()
    }
}
const pragati = new Userr('pa@gmail.ai','abc')
console.log(pragati.password);
console.log(pragati.email);