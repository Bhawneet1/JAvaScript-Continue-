class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value
    }
    get password(){//no getter without setter and vice-versa
        //koi value get karna chahate ho outside class to getter
        return this._password.toUpperCase()
        //ham value output mai vo dete hai jo 
        //same nahi as original
    }
    set password(value){
        this._password=value//put _password that is new var
        // Maximum call stack size exceeded-Error
        //constructor aur set dono value set kar rahe
        //hai to unme race lagti hai to
        //Max call stack exceeded
        //_password sai hamara constructor value nahi set kar rha
    }
}
//getter setter mai prop ka name as name dena padta hai
const Bhawneet=new user("BB@gmail.com","abbc")
console.log(Bhawneet.password);
console.log(Bhawneet.email);
