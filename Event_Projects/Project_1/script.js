//generate a random color

const randomColor=function(){
    const hex ="0123456789ABCDEF"
    let color ='#'
    for(let i=0;i<6;i++){//6 digit hex code
      color +=hex[Math.floor(Math.random()*16)]//16 (0-F) digits in hexadecimal
    }
    return color;
  }
  
  let intervalId
  const startChangingColor=function(){
    // intervalId=setInterval(changeBgColor,2000)
    if(intervalId){
      intervalId=setInterval(changeBgColor,2000)//after we declare null we need to check
    }
    function changeBgColor(){
      document.body.style.backgroundColor=randomColor();
    }
  }
  document.querySelector('#start').addEventListener('click',startChangingColor)
  
  
  const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null;//after use clear intervalId
  }
  
  document.querySelector('#stop').addEventListener('click',stopChangingColor)