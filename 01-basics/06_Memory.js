"use strict";

//  ------------- Memory ----------


//  1. Stack(Premitiv)

//  stores all premitive data types in stack
//  gives only copies from the memory
//  if changes takes place in one variable doesn't affect the original value

//  Example


let myName="ankit"

let myNicName="chotu"
 let OfficialName=myName;
 OfficialName="Ankit Kumar Yadav"
 console.log(myName);
 console.log(OfficialName);
 
 

//  2. Heap(Non-premitive)

//  stores all Non - Premitive data types in Heap 
//   gives the reference from  the memory
//  if changes occurs the original value also changes in the heape memory 

// Example

let myObj={
    email: "ankit@google.com",
    names:"chotu"

}
let myObjTwo=myObj
myObjTwo.name="Ankit kr."
 
console.log(myObj.email);
console.log(myObjTwo.email);
console.log(myObj.name);
console.log(myObjTwo.name);

