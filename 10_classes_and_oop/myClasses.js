class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    ChangeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("Bhawneet","b@gmail.com","123");
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.ChangeUsername());


//behind the seen(agar class na hoti)
function users(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
users.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
users.prototype.ChangeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const userOne=new users("Bhawneet","bh@gmail.com","3456")
console.log(userOne.ChangeUsername())
console.log(userOne.encryptPassword());
