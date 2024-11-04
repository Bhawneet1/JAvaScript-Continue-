class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    static createId(){//can't be accessed by user with static
        return Math.round(Math.random()*10000+1000)
    }
}
const Bhawneet=new User("Bhawneet")
// console.log(Bhawneet.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.createId()