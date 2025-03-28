"use strict";

let myBill=[1,2,3]
let total=myBill.reduce(function(accumulator,currentValue) {
    // for checking pourpose
    console.log(`accumulator=${accumulator} and currentValue=${currentValue}`);
    
    return accumulator+currentValue


},0)
console.log(total);

// doing same this using arrow function

let newbill=[10,20,30]
let newTotal=newbill.reduce( (acc,cv)=>{
    return acc+cv;
},0)

console.log(newTotal);
