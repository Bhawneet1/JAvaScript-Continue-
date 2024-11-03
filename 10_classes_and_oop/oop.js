const user={
    username:"Bhawneet",
    loginCount: 8,
    signedIn:true,
    getUserDetails:function(){
        console.log(`username: ${this.username}`);
        //if without this username not defined
        //as execution context
        console.log(this);
        
    }
}
// const user2={
//     username:"Karan",
//     loginCount: 10,
//     signedIn:true,
//     getUserDetails:function(){
//         console.log(`username: ${this.username}`);
//         //if without this username not defined
//         //as execution context
//         console.log(this);
        
//     }
// }
//har baar same object banana padega
//to constructor function
console.log(user);
const {username:name}=user
console.log(name);
console.log(user.getUserDetails());
console.log(this);//{}
//this matlab parent lekin iska parent nahi hai
//browser mai window aati hai

// this means current context

//constructor function is new 
//multiple instances using same function

//const date=new Date()

function users(username,loginCount,isLoggedIn){
     this.username= username//this walla hai variable
     //jise vaue assign ho rahi hai
     this.loginCount=loginCount
     this.isLoggedIn=isLoggedIn

     this.greeting =function(){
        console.log(`Welcome ${this.username}`);
        
     }
     return this
    //if we donot return it implicitly returns
} 

const userOne=users("Bhawneet",8,true)
const userTwo=users("ChaiAurCode",40,true)
//userTwo nai userOne ki value overwrite kar di
//therefore only one user is created not two
console.log(userOne);
const new_userOne=new users("Bhawneet",8,true)
const new_userTwo=new users("Karan",40,true)
console.log(new_userOne);
console.log(new_userTwo);
console.log(new_userOne.constructor);
//[Function: users]
//kudka reference

console.log(new_userOne instanceof users);
console.log(userOne instanceof users);
