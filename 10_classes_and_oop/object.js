function multiplyByFive(num){
    return num*5
}

multiplyByFive.power =2
console.log(multiplyByFive(5));//25
console.log(multiplyByFive.power);//2
console.log(multiplyByFive.prototype);//{}
//object is end therefore prototype of object is null
function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment =function(){
    this.score++//this matlab jis nai bhi usko bulaya hai
}//create prototype
createUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`);
    //jiska matlab this
}
const chai=new createUser("chai",25)
const tea=new createUser("Tea",250)
//gar new nahi lagya to use newly created new keyword 
//ka nahi pata chalega
chai.increment()
chai.printMe()//ham prototype nahi likhte kyoki 
//hame layers of prototype nahi pata
//chai.prototype.printMe()❌
//chai.printMe()✅

tea.increment()
tea.printMe()

console.log(createUser.prototype)
//{ increment: [Function (anonymous)], printMe: [Function (anonymous)] }


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/