let myName ="Bhawneet     "

console.log(myName.length);
//agar space ho to true length dai 
//spaces count na kare

console.log(myName.trim().length);

//new property we need to add trueLength

// console.log(myName.trueLength());


let myHeros =["thor","spiderman"]
let heroPower ={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower :function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}
//agar object mai daal di to sabmai aa jaegi
Object.prototype.Bhawneet=function(){
    console.log("Bhawneet is present in all objects");
    
}
heroPower.Bhawneet()//object mai bhi object ka prototype
myHeros.Bhawneet()//array mai bhi object ka prototype
Array.prototype.heyBhawneet=function(){
    console.log("Bhawneet says hello");
    
}
myHeros.heyBhawneet()
//heroPower.heyBhawneet()//Object kai pass access nahi hoga
//Array walle prototype ka upar sai neeche aa sakte hai
//par neeche sai upar nahi ja sakte


//inheritance
const user={
    username:"Chai",
    email:"Chai@gmail.com"
}

const Teacher ={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport//adding prototype
}
Teacher.__proto__=user
//user parent and teacher child

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
//Teaching Support can access Teacher
//Teacher parent and TeachingSupport is child


let anotherUsername ="ChaiAurCode    "
String.prototype.trueLength=function(){
    console.log(`${this}`);//ChaiAurCode   
    console.log(`The true length is :${this.trim().length}`);
}
anotherUsername.trueLength()
"Bhawneet".trueLength()
//jisne call kiya this
"iceTea".trueLength()