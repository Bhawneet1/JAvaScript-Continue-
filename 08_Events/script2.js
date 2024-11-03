setTimeout(function(){
    console.log("Hello");
    
},1000)
//setTimeout(function(){},1000)//1000 ms
//runs one time


// setInterval(function() {
//     console.log("bye");
    
// },1000)
//runs every sec


const sayBhawneet =function(){
    console.log("Bhawneet");
    
}

const changeText=function(){
    document.querySelector('h1').innerHTML="Best JS Series"
}

const changeMe=setTimeout(changeText,3000)
setTimeout(sayBhawneet,2000)//pass reference of sayBhawneet

//agar timeout rokna hai
// clearTimeout(changeMe)

document.querySelector('#stop').addEventListener('click',function(e){
    clearTimeout(changeMe)
    console.log("STOPPED");
    
})