const user = {
    _email: 'p@pa.com',
    _password: "abc",
    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = val
    }
}

const tea = Object.create(user)
console.log(tea.email);