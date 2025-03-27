"use strict";
// *********** Functions *********

const myFunction =function() {
    console.log("hello world");
    
}

myFunction();

// function returns

let addFunction =function(number1,number2){
    return number1+number2
}

let result=addFunction(3,9)
console.log(result);



let userFunction=function(userName){
    if(userName===undefined){
        console.log("please enter a valid username");
        return
    }

    return `${userName} is Successfully Logged-In`
}
console.log(userFunction("chotu-motu"));


// insted of reciving an undefined in output 
// we will set a default username  
//even if user didn't enter a userName it set a defalut username

let userNameFunction=function(username="ankit"){
       return `${username} is logged-in`
}
console.log(userNameFunction());// yaha wo default name le rha h 
console.log(userNameFunction("chotu"));// but yaha maine argument specify kiya h 


// ***  Accessing an object Element in a Functon  *** 

let user ={
    name:"chotu-motu",
    lastLoggedIn:"Monday"

}


function userObject(anyObject){
  console.log(`user ${anyObject.name} was last Logged in on ${anyObject.lastLoggedIn} .thank you`)
}
userObject(user);


//  ***** Rest Operator *****

//  the rest operator is very similar like spread operator and the syntax is same for both  ,depends where its being used 


// ye normal function 
function nonRestFunction(num1){
    return num1;
}
console.log(nonRestFunction(4));// ye sirf ek  number return krega 


// Rest operator 
function restFunction(...num1){
    return num1;
}
console.log(restFunction(2,3,4,5,6,7));// ye saare no. ko argument me h sab print kr dega


// accessing an Array element in a Function 

let myArray=[2,5,7,8]

function arrayFunction(getArray){
      
     return`${getArray[0]}`


}
console.log(arrayFunction(myArray));


