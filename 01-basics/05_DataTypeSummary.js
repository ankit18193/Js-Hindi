// ---------Data Types ---------
//  1: Premitive 
//  2: Non-Premitive 

// -------premitive---------
 
// String,Number,Boolean,Null,Undefined,Symbol, BIgInt

let name="ankit"// String 
console.log(typeof name);

let num=1234 // Number
console.log(typeof num);x

let isLoggedIn=true //Boolean
console.log(typeof isLoggedIn);

let somthing;  // ye Undefined h 
console.log(typeof somthing);
let Id=Symbol(2323);
console.log(typeof Id);
 let BigInt_num=1234567n; // BigInt
 console.log(typeof BigInt_num);
 



 // ----------Non-Premitive--------

//   Arrays,Functions,Objects


let names=["a","b","c","d"]
console.log( typeof names);


let myFunction=function(){
    console.log("hello world");
    
}
console.log( typeof myFunction);
 let myObj={

     empId: 2324,
     empName: "putnu-putnu",
     age: 12,

 }
console.log(typeof myObj);



