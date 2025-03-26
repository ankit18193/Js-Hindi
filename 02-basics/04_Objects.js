"use strict";

const myobj=new Object()

myobj.name="hero"
myobj.email="falanwa@google.com"
myobj.isLoggedIn=true


const myNewObj ={
    userName:"chotu-motu",
    age:22,
    email:"motu@google.com",
    isAdmin:false,
    hobbies:["sleeping","coding","traveling","aram-krna"],
    address:{
        city:"dhanbad",
        state:"jharkhand",
        country:"India",

    },
    login:function(){
        console.log(`yes ${this.userName} is logged in `);
        
    },
     
    logout:function(){
        
        return `yes ${this.userName} is logged out`;
    }
    
    
    
    
}

console.log(myNewObj.login());
console.log(myNewObj.logout());

console.log(myNewObj.address.city); // accessing the elements of object in an object

// const newObj=Object.assign({},myobj,myNewObj) // merging two objects in one object

// ***** merge using Spread Operator *****
const obj_4={...myNewObj,...myobj}
// console.log(newObj);
console.log(obj_4);

// yaha ek catch h ki jab mai dono object ko merge kr rha h hoon tb ek object ki email dusre se over write ho ja rhi h kyu ki dono me element ka naam same h toh pehne new obj me first object ki value copy huwe phir second object ki email overwrite ho gai kyu ki dono ke element ke naam same h 



//******** Array Of Objects *************


let user=[
    {
        userMail:"Ankit@google.com",
        useName:"chotu"
    },
    {
         userMail:"chotu@google.com",
        useName:"motu"
    },
    {
         userMail:"patlu@google.com",
        useName:"patlu"

    },
    {
        useName:"Abc",
        userMail:"abc@yaaho.com"
    }
]
console.log(user[2].useName);


console.log(Object.keys(obj_4));
console.log(Object.values(obj_4));
console.log(Object.entries(obj_4));
console.log(obj_4.hasOwnProperty("isLoggedIn"));

//  *********** Objects De-Structring **********

const book={
    bookName:"Physics",
    bookId:"PHY-101",
    pageCount:2000,

}
  // De-Structuring Starts here


  const {bookName:name}=book
  console.log(name);
  
  



