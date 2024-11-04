const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
//tell about hidden properties of object
// Math.PI=5//can't be change
// console.log(Math.PI);

console.log(descriptor);
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
  */

// const mynewObject=Object.create(null)


const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,
    orderChai: function(){
        console.log("chaiii");
        
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//Object,"property"

/*[[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
 [[Enumerable]] – indicates if a property can be returned in the for...in loop.
 [[Writable]] – specifies that the value of a property can be changed.
 [[Value]] – contains the actual value of a property.
 */

 Object.defineProperty(chai,'name',{
    writable:false,
    enumerable: false,
 })
 console.log(Object.getOwnPropertyDescriptor(chai,"name"));

 for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    //enumeration false on naem therefore not enter loop
    
 }