class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{//inheritance
    constructor(username,email,password){
        super(username)//refers to password for username
        //no need to call
        this.email=email;
        this.password=password;

    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}
const teacherOne=new Teacher("Chai","Chai@123","345")
teacherOne.addCourse()

const Chai=new User("Chai")
//chai.addCourse()//no excess to child class
Chai.logMe()

console.log(Chai == Teacher);
//false

console.log(Chai instanceof User);
//true

console.log(teacherOne instanceof Teacher);
//true

console.log(Teacher instanceof User);
//false

console.log(Chai instanceof User);
//true