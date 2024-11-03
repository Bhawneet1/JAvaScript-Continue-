// document.getElementById('owl').onclick =function(){
//     alert("Owl clicked")
// }not optimised therefore use eventlistener

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e);
    
// },false)//3rd parameter is by default false 
//type,timestamp,defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode
/*Key Properties and Methods of the event Object:

Event Type (type):

A string representing the type of event that occurred (e.g., click, mouseover, keydown).
Target Element (target):

A reference to the element that triggered the event.
Current Target Element (currentTarget):

A reference to the element whose event listener is currently being executed. This can be different from the target in cases of event bubbling or capturing.
Event Phase (eventPhase):

An integer representing the current phase of the event:
0: Capturing phase
1: At target
2: Bubbling phase
Timestamp (timeStamp):

A number representing the time the event occurred, measured in milliseconds since the epoch.
ClientX, ClientY:

The x and y coordinates of the mouse pointer relative to the viewport.
PageX, PageY:

The x and y coordinates of the mouse pointer relative to the entire document.
KeyCode, Key:

For keyboard events, these properties provide information about the key that was pressed.
Common Use Cases:

Preventing Default Behavior:

JavaScript
element.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default action (e.g., link navigation)
});
Use code with caution.

Stopping Event Propagation:

JavaScript
element.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up to parent elements
});
Use code with caution.

Accessing Event-Specific Data:

JavaScript
element.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
});
*/



//Event propagation
//that is set false in addEventListener
//Bubbling


// document.getElementById('images').addEventListener('click',function(e){
//     console.log("Clicked inside the ul");
    
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("Owl clicked");
    
// },false)
//owl bhi ul kai andar hai to dono code activate hone chahiye
//bubbling therefore pehle owl walla phir images walla

//Capturing

document.getElementById('images').addEventListener('click',function(e){
    console.log("Clicked inside the ul");
    
},true)

document.getElementById('owl').addEventListener('click',function(e){
    console.log("Owl clicked");
    e.stopPropagation()//will not bubble
    //but will capture
},true)
//pehle images phir owl

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log("Google Clicked");
    
    
},false)




document.querySelector('#images').addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    //kis image sai target ho rha hai
    console.log(e.target.parentNode);
    //here li as li kai andar img hai

    

    if(e.target.tagName==='IMG'){
        console.log(e.target.id);
        
        let removeIt=e.target.parentNode
        removeIt.remove() 
        // removeIt.parentNode.removeChild(removeIt)
    }
},false)
