const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network call
    setTimeout(function(){
        console.log('Async task completed')
        resolve()
        //Asyn task completed
        //without resolve 
        //to connect call resolve()
    },1000);
});
//Promises is a object representing future completion
//consume of promise
//direct relation with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
    //Asyn task completed
    //Promise consumed
    //with resolve
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})//no variable allocated


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email:"chai@example.com"})
    },1000)
})

//yahan sari values return hoti hai
promiseThree.then(function(user){
    console.log(user);
    
})//{ username: 'Chai', email: 'chai@example.com' }


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Bhawneet",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },2000)
})

// const username=promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// console.log(username);//'ERR_UNHANDLED_REJECTION'

promiseFour.then((user)=>{//if resolve
        console.log(user);
        return user.username
}).then((username)=>{
        console.log(username);//chaining upar walla jo return karega esme aega

        
}).catch(function(error){//if reject
    console.log(error);
    
}).finally(()=>console.log("The promise is either resolved or rejected"));
//finally always occur


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }
        else
        {
            reject("ERROR:Js went wrong")
        }
    },2000)
});
// promiseFive.then(function(user){
//     console.log(user);
//     return user.password
// }).then(function(password){
//     console.log(password);
    
// }).catch((error)=>console.log(error)
// ).finally(()=>{console.log("After all execution");
// })Method-1

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}//we need to apply try catch in async to function properly
consumePromiseFive()//'ERR_UNHANDLED_REJECTION'



// async function getGithub() {
//    try{
//     const respose =await fetch('https://api.github.com/users/Bhawneet1')
//     console.log(response);
    
//     const data=respose.json()
//     console.log(data);
//    }
//    catch(error){
//     console.log("E: ",error);
    
//    }
    
// } 


// getGithub()
fetch ('https://api.github.com/users/Bhawneet1')
.then((response)=>{
    return response.json()
}).then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})