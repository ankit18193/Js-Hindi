"use strict";
 let mySymbol=Symbol("hello")

let myObj={
    name:"chotu-motu",
    "Official-name":"Ankit Kr Yadav",
    [mySymbol]:"hello", // this the correct way to write a symbol in an objet
    age:22,
    email:"chotu@google.com",
    isLoggedIn:true,
}
// console.log(myObj.email)
// console.log(myObj["email"])
// console.log(myObj["Official-name"]);
// console.log(myObj[mySymbol]);// no dobble quotes are required for accesing a symbol from an object




myObj.email="chotumotu@google.com"
// Object.freeze(myObj)
// myObj.email="pagalWorld@google.com"
console.log(myObj)

myObj.myUserFunction = function(){
    console.log("hello world");
    
}

myObj.myUserFunction();

