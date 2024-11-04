function SetUsername(username){
    this.username=username
    console.log("called");
    

}
function createUser(username,email,password){
    // SetUsername(username)
    //call nahi ho raha

    // SetUsername.call(username)
    //ab call hoga
    //createUser { email: 'chai@example.com', password: '123' }
    //call hoge fir gayab ho gae
    //as the context of username was local
    //to disappear after executed

    //apne this na use karo mera this use karo
    //mera var apka hua

    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai =new createUser("chai","chai@example.com","123")
console.log(chai);
//createUser { email: 'chai@example.com', password: '123' }
//no username assigned

