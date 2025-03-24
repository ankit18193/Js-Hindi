"use strict";

let marks=44
let intoString=String(marks)


let condition=true
let checkCondition=Number(condition)

console.log(typeof(condition));
console.log(typeof(intoString));
console.log(checkCondition);

let newNumber = "123asd" // Nan
let toNumber= Number(newNumber)
console.log(typeof(toNumber)); // the system will try to convert into number but,
console.log(toNumber); // this will throw NaN (Not A Number )

 let emptyString=""
 let checkEmptyString=Boolean(emptyString)
 console.log(checkEmptyString);
 
