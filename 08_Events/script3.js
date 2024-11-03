// setInterval(function(){
//     console.log("Bhawneet",Date.now());
    
// },2000)

const sayDate=function(str){
    console.log(str,Date.now());
    
}

const intervalId=setInterval(sayDate,1000,"hi")//we can also pass arguments
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId)
    console.log("STOPPED");
    
})
document.querySelector('#start').addEventListener('click',function(){
    intervalId

})